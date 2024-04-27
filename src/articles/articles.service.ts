import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import { google, drive_v3 } from 'googleapis';
import { TokenService } from './token.service';
import { generatePdf } from '../utils/generatePdf';
import * as fs from 'fs';
import { InjectModel } from '@nestjs/sequelize';
import { Articles } from './articles.model';

config();

interface FileStructure {
  [key: string]: string | FileStructure;
}

@Injectable()
export class ArticlesService {
  private readonly drive: drive_v3.Drive;

  constructor(
    private readonly tokenService: TokenService,
    @InjectModel(Articles)
    private readonly articlesModel: typeof Articles,
  ) {
    this.drive = google.drive({
      version: 'v3',
      auth: this.tokenService.getOAuth2Client(),
    });
  }

  async listFilesInFolder(folderId: string): Promise<drive_v3.Schema$File[]> {
    try {
      const response = await this.drive.files.list({
        q: `'${folderId}' in parents and trashed=false`,
        fields: 'files(id, name, mimeType)',
      } as any);

      const files = response.data.files || [];

      return files;
    } catch (error) {
      console.error('Error listing files:', error.message);
      throw new Error('Failed to list files');
    }
  }

  async recursivelyReadFolders(
    folderId: string,
    result: { [key: string]: any },
  ) {
    try {
      const files = await this.listFilesInFolder(folderId);

      for (const file of files) {
        if (file.mimeType === 'application/vnd.google-apps.folder') {
          // Если файл - это папка, создается пустой объект для этой папки
          result[file.name] = {};
          // Рекурсивный вызов этой же функции для обработки вложенных папок
          await this.recursivelyReadFolders(file.id, result[file.name]);
        } else {
          // Если файл - это документ, добавляем его имя как ключ и идентификатор как значение
          result[file.name] = file.id;
        }
      }
    } catch (error) {
      console.error('Error reading folders:', error.message);
      throw new Error(error);
    }
  }

  async generateObjectFromFolders(
    folderId: string,
  ): Promise<{ [key: string]: any }> {
    try {
      const result: { [key: string]: any } = {};
      await this.recursivelyReadFolders(folderId, result);
      return result;
    } catch (error) {
      console.error('Error generating object from folders:', error.message);
      throw new Error(error);
    }
  }

  async readGoogleDocContent(fileId: string): Promise<string> {
    try {
      const response: any = await this.drive.files.export({
        fileId,
        mimeType: 'text/html',
        auth: this.tokenService.getOAuth2Client(),
      } as any);

      return response.data;
    } catch (error) {
      console.error('Error reading Google Doc content:', error.message);
      throw new Error(error);
    }
  }

  async readJsonFile(): Promise<FileStructure> {
    try {
      const jsonData = fs.readFileSync('./src/assets/folder.json', 'utf-8');
      return JSON.parse(jsonData);
    } catch (error) {
      console.error('Error reading JSON file:', error.message);
      throw new Error(error);
    }
  }

  async saveDataFromJson() {
    try {
      const jsonData = fs.readFileSync('./src/assets/folder.json', 'utf-8');
      const data = JSON.parse(jsonData);

      for (const title of Object.keys(data)) {
        const subtitles = data[title];
        for (const subtitle of Object.keys(subtitles)) {
          const numbers = subtitles[subtitle];
          for (const number of Object.keys(numbers)) {
            const item = numbers[number];
            // Создаем запись в базе данных
            await this.articlesModel.create({
              title: title,
              subtitle: subtitle,
              number: number,
              data: await this.readGoogleDocContent(item),
            });
          }
        }
      }
    } catch (error) {
      console.error('Error saving data:', error.message);
      throw new Error(error);
    }
  }

  // async generateHtmlFromJson(data: FileStructure): Promise<string> {
  //   let html = '<html><body>';
  //   const fileStructure = await this.readJsonFile();
  //   const topLevelKeys = Object.keys(fileStructure);
  //
  //   try {
  //     for (const key in data) {
  //       const isTopLevelKey = topLevelKeys.includes(data[key] as string);
  //
  //       if (typeof data[key] === 'string') {
  //         const fileId = data[key] as string;
  //         const content = await this.readGoogleDocContent(fileId);
  //         html += `<p>${content}</p>`;
  //       } else if (typeof data[key] === 'object') {
  //         // Это вложенный объект, поэтому это заголовок
  //         html += isTopLevelKey ? `<h1>${key}</h1>` : `<h3>${key}</h3>`;
  //         html += await this.generateHtmlFromJson(data[key] as FileStructure);
  //       } else {
  //         // Пропускаем все остальные случаи
  //         console.error(`Skipping key ${key}`);
  //       }
  //     }
  //     html += '</body></html>';
  //     return html;
  //   } catch (error) {
  //     console.error('Error generating HTML from JSON:', error.message);
  //     throw new Error(error);
  //   }
  // }

  // async generateAndSavePdfFromJson() {
  //   try {
  //     const fileStructure = await this.readJsonFile();
  //     const htmlContent = await this.generateHtmlFromJson(fileStructure);
  //     await generatePdf(htmlContent);
  //   } catch (error) {
  //     console.error('Error generating and saving PDF:', error.message);
  //     throw new Error(error);
  //   }
  // }

  // async readFiles() {
  //   try {
  //     const fileIds = ['1Do6rituX79Xga9YYbUQv23AKmFJFwc9yDtMCzO_6waA'];
  //
  //     const results = [];
  //
  //     await Promise.all(
  //       fileIds.map(async (fileId) => {
  //         const content = await this.readGoogleDocContent(fileId);
  //         return results.push(content);
  //       }),
  //     );
  //
  //     return generatePdfOfArray(results);
  //   } catch (error) {
  //     console.error('Error reading files:', error.message);
  //     throw new Error(error);
  //   }
  // }
}
