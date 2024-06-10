import { Injectable } from '@nestjs/common';
import { computeSum } from '../utils/computeSum';
import { calculatedDates } from '../utils/claculateMainCoordintates';
import { InjectModel } from '@nestjs/sequelize';
import { Articles } from '../articles/articles.model';
import * as fs from 'fs';
import { generatePdf } from '../utils/generatePdf';
import { calculatedComp } from '../utils/calculateCompatibilityCoordinates';
import { CompatibilityArticles } from '../articles/compatibility-articles.model';
import { compatibilityFieldsToReplace } from '../utils/compatibilityFieldsToReplace';
import { fieldsToReplace } from '../utils/fieldsToReplace';
import { childrenFieldsToReplace } from '../utils/childrenFIeldsToReplace';
import { ChildrenArticles } from '../articles/children-articles.model';
import { calculateChildrenDates } from '../utils/calculateChildrenCoordinates';

@Injectable()
export class CalculatorService {
  constructor(
    @InjectModel(Articles)
    private readonly articlesModel: typeof Articles,

    @InjectModel(CompatibilityArticles)
    private readonly compatibilityArticlesModel: typeof CompatibilityArticles,

    @InjectModel(ChildrenArticles)
    private readonly childrenArticlesModel: typeof ChildrenArticles,
  ) {}

  async calculate(date: string, isChildren?: boolean) {
    const [day, month, year] = date
      .split('.')
      .map(Number)
      .map((el) => computeSum(el));

    if (isChildren) {
      return calculateChildrenDates(day, month, year);
    }

    return calculatedDates(day, month, year);
  }

  async calculateCompatibility(date1: string, date2: string) {
    const {
      d: firstD,
      e: firstE,
      f: firstF,
      g: firstG,
      h: firstH,
      i: firstI,
      a: firstA,
      b: firstB,
      c: firstC,
    } = await this.calculate(date1, false);

    const {
      d: secondD,
      e: secondE,
      f: secondF,
      g: secondG,
      h: secondH,
      i: secondI,
      a: secondA,
      b: secondB,
      c: secondC,
    } = await this.calculate(date2, false);

    return calculatedComp({
      date1,
      date2,
      firstD,
      secondD,
      firstE,
      secondE,
      firstF,
      secondF,
      firstG,
      secondG,
      firstH,
      secondH,
      firstI,
      secondI,
      firstA,
      secondA,
      firstB,
      secondB,
      firstC,
      secondC,
    });
  }

  async getDataFromDatabaseByParams(
    title: string,
    subtitle: string,
    number: string,
    model: typeof Articles | typeof CompatibilityArticles,
  ): Promise<string | null> {
    try {
      const article = await model.findOne({
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

  generateImageScheme(templatePath: string, imagePath: string) {
    let imageHtml = fs.readFileSync(templatePath, 'utf-8');

    const matrixImage = fs.readFileSync(imagePath);

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
        this.generateImageScheme(
          './src/assets/templates/matrix-template.html',
          './src/public/images/matrix.svg',
        ),
      );

      for (const field of fields) {
        const data = await this.getDataFromDatabaseByParams(
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

      await generatePdf(modifiedHtml, date);

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

  async fillHtmlCompatibilityTemplate(date1: string, date2: string) {
    try {
      let modifiedHtml = fs.readFileSync(
        './src/assets/templates/compatibility-template.html',
        'utf-8',
      );

      const dateObject = await this.calculateCompatibility(date1, date2);

      const fields = compatibilityFieldsToReplace(dateObject);

      modifiedHtml = modifiedHtml.replace(
        '{compMatrix}',
        this.generateImageScheme(
          './src/assets/templates/compatibility-matrix-template.html',
          './src/public/images/comp-matrix.svg',
        ),
      );

      for (const field of fields) {
        const data = await this.getDataFromDatabaseByParams(
          field.title,
          field.subtitle,
          field.number,
          this.compatibilityArticlesModel,
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

      await generatePdf(modifiedHtml, `${date1} + ${date2}`);

      return modifiedHtml;
    } catch (e) {}
  }

  async fillChildrenTemplate(date: string) {
    try {
      let modifiedHtml = fs.readFileSync(
        './src/assets/templates/children-template.html',
        'utf-8',
      );

      const dateObject = await this.calculate(date, true);

      const fields = childrenFieldsToReplace(dateObject);

      modifiedHtml = modifiedHtml.replace(
        '{matrix}',
        this.generateImageScheme(
          './src/assets/templates/matrix-template.html',
          './src/public/images/matrix.svg',
        ),
      );

      for (const field of fields) {
        const data = await this.getDataFromDatabaseByParams(
          field.title,
          field.subtitle,
          field.number,
          this.childrenArticlesModel,
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

      await generatePdf(modifiedHtml, date);

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
