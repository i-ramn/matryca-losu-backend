import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Articles } from '../articles/articles.model';
import { CalculatorService } from './calculator.service';
import * as fs from 'fs';
import { fieldsToReplace } from '../utils/fieldsToReplace';
import { generatePdf } from '../utils/generatePdf';

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

  private choseFile(date: string): string {
    const age = this.age(date);

    let modifiedHtml: string;

    switch (true) {
      case age > 16 && age <= 30:
        modifiedHtml = fs.readFileSync(
          './src/assets/templates/years/16-30.html',
          'utf-8',
        );
        break;
      case age >= 31 && age <= 40:
        modifiedHtml = fs.readFileSync(
          './src/assets/templates/years/31-40.html',
          'utf-8',
        );
        break;
      case age >= 41 && age <= 50:
        modifiedHtml = fs.readFileSync(
          './src/assets/templates/years/41-50.html',
          'utf-8',
        );
        break;
      case age >= 51 && age <= 60:
        modifiedHtml = fs.readFileSync(
          './src/assets/templates/years/51-60.html',
          'utf-8',
        );
        break;
      case age >= 61 && age <= 70:
        modifiedHtml = fs.readFileSync(
          './src/assets/templates/years/61-70.html',
          'utf-8',
        );
        break;
      case age >= 71:
        modifiedHtml = fs.readFileSync(
          './src/assets/templates/years/71-80.html',
          'utf-8',
        );
        break;
      default:
        modifiedHtml = 'No template available for the specified age range.';
        break;
    }

    return modifiedHtml;
  }

  public async fillHtmlYearsTemplate(date: string) {
    let modifiedHtml = this.choseFile(date);

    const dateObject = await this.calculateService.calculate(date);
    const fields = fieldsToReplace(dateObject);

    for (const field of fields) {
      const data = await this.calculateService.getDataFromDatabaseByParams(
        field.title,
        field.subtitle,
        field.number,
        this.articlesModel,
      );

      modifiedHtml = modifiedHtml.replace(`{${field.name}Content}`, data);
      modifiedHtml = modifiedHtml.replace(
        `{${field.name}Number}`,
        field.number,
      );
    }

    for (const key in dateObject) {
      if (dateObject.hasOwnProperty(key)) {
        const regex = new RegExp(`{${key}}`, 'g');
        modifiedHtml = modifiedHtml.replace(regex, dateObject[key]);
      }
    }

    await generatePdf(modifiedHtml, `date-${date}`, true);

    return modifiedHtml;
  }
}
