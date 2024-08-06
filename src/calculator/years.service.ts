import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Articles } from '../articles/articles.model';
import { CalculatorService } from './calculator.service';
import * as fs from 'fs';
import { generatePdf } from '../utils/generatePdf';
import { yearsFieldsToReplace } from '../utils/yearsFieldsToReplace';

@Injectable()
export class YearsService {
  constructor(
    @InjectModel(Articles)
    private readonly articlesModel: typeof Articles,
    private readonly calculateService: CalculatorService,
  ) {}

  private parseDate(date: string): Date {
    const [day, month, year] = date.split('.').map(Number);
    return new Date(year, month - 1, day); // Преобразование строки в объект Date
  }

  private age(date: string) {
    const birthDate = this.parseDate(date); // Преобразование строки в дату
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }

  public async fillHtmlYearsTemplate(date: string) {
    let modifiedHtml = fs.readFileSync(
      './src/assets/templates/years/general-years.html',
      'utf-8',
    );

    const dateObject = await this.calculateService.calculate(date);

    const fields = yearsFieldsToReplace(dateObject);

    const age = this.age(date).toString();

    let index = fields.findIndex((item) => item.name === age);

    if (index === -1) {
      for (let i = parseInt(age, 10) - 1; i >= 0; i--) {
        index = fields.findIndex((item) => item.name === i.toString());
        if (index !== -1) {
          break;
        }
      }
    }

    let newFields = [];

    if (index === -1) {
      // If age is less than the first available age, take the first 5 fields
      newFields = fields.slice(0, 5);
    } else if (
      parseInt(age, 10) > parseInt(fields[fields.length - 1].name, 10)
    ) {
      // If age is greater than the last available age, take the last 5 fields
      newFields = fields.slice(-5);
    } else {
      // Otherwise, take the 5 fields starting from the found index
      newFields = fields.slice(index, index + 5);
    }

    for (const field of newFields) {
      const data = await this.calculateService.getDataFromDatabaseByParams(
        field.title,
        field.subtitle,
        field.number,
        this.articlesModel,
      );

      if (data) {
        modifiedHtml = modifiedHtml.replace(`{${field.name}Content}`, data);
        modifiedHtml = modifiedHtml.replace(
          `{${field.name}Number}`,
          `(${field.number})`,
        );
        modifiedHtml = modifiedHtml.replace(
          `{${field.name}Scope}`,
          field.scope,
        );
      } else {
        // If no data, remove the entire block
        const blockRegex = new RegExp(
          `<h3>[^<]*${field.name}[^<]*LAT<\/h3>\\s*<p class="number">\\{${field.name}Number\\}<\/p>\\s*<p>\\{${field.name}Content\\}<\/p>`,
          'g',
        );
        modifiedHtml = modifiedHtml.replace(blockRegex, '');
      }
    }

    modifiedHtml = modifiedHtml.replace(/\{[0-9]+Number\}/g, '');
    modifiedHtml = modifiedHtml.replace(/\{[0-9]+Content\}/g, '');
    modifiedHtml = modifiedHtml.replace(/\{[0-9]+Scope\}/g, '');

    await generatePdf(modifiedHtml, `date-${date}`, true);

    return modifiedHtml;
  }
}
