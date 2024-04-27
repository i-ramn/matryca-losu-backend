import { Injectable } from '@nestjs/common';
import { computeSum } from '../utils/computeSum';
import { calculatedDates } from '../utils/claculateMainCoordintates';
import { InjectModel } from '@nestjs/sequelize';
import { Articles } from '../articles/articles.model';
import * as fs from 'fs';
import { generatePdf } from '../utils/generatePdf';
import { fieldsToReplace } from '../utils/fieldsToReplace';

@Injectable()
export class CalculatorService {
  constructor(
    @InjectModel(Articles)
    private readonly articlesModel: typeof Articles,
  ) {}

  async getDataFromDatabaseByParams(
    title: string,
    subtitle: string,
    number: string,
  ): Promise<string | null> {
    try {
      const article = await this.articlesModel.findOne({
        where: { title, subtitle, number },
      });

      if (article) {
        return article.data;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching data from database:', error.message);
      throw new Error(error);
    }
  }

  async calculate(date: string) {
    const [day, month, year] = date
      .split('.')
      .map(Number)
      .map((el) => computeSum(el));

    return calculatedDates(day, month, year);
  }

  generateImageScheme() {
    let imageHtml = fs.readFileSync(
      './src/assets/templates/matrix-template.html',
      'utf-8',
    );

    const matrixImage = fs.readFileSync('./src/public/images/matrix.svg');

    const base64Image = Buffer.from(matrixImage).toString('base64');

    return imageHtml.replace(
      '{imageSrc}',
      `data:image/svg+xml;base64,${base64Image}`,
    );
  }

  async fillHtmlTemplateWithDataFromDatabase(date: string) {
    try {
      let modifiedHtml = fs.readFileSync(
        './src/assets/templates/general-template.html',
        'utf-8',
      );

      const dateObject = await this.calculate(date);

      const fields = fieldsToReplace(dateObject);

      modifiedHtml = modifiedHtml.replace(
        '{matrix}',
        this.generateImageScheme(),
      );

      for (const field of fields) {
        const data = await this.getDataFromDatabaseByParams(
          field.title,
          field.subtitle,
          field.number,
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

      await generatePdf(modifiedHtml);

      return modifiedHtml;
      // return dateObject;
    } catch (error) {
      console.error(
        'Error filling HTML template with data from database:',
        error.message,
      );
      throw new Error(error);
    }
  }
}
