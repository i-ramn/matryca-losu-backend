import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import { google, drive_v3 } from 'googleapis';
import { TokenService } from './token.service';
import * as puppeteer from 'puppeteer';

config();

@Injectable()
export class ArticlesService {
  private readonly drive: drive_v3.Drive;

  constructor(private readonly tokenService: TokenService) {
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

  async readGoogleDocContent(fileId: string): Promise<void> {
    try {
      const response: any = await this.drive.files.export({
        fileId,
        mimeType: 'text/html',
        auth: this.tokenService.getOAuth2Client(),
      } as any);

      if (response.data !== undefined) {
        const htmlContent = response.data.toString();
        await this.convertHtmlToPdf(htmlContent);
      } else {
        console.error('Empty response received from Google Docs export');
        throw new Error('Empty response received from Google Docs export');
      }
    } catch (error) {
      console.error('Error reading Google Doc content:', error.message);
      throw new Error('Failed to read Google Doc content');
    }
  }

  async convertHtmlToPdf(htmlContent: string): Promise<void> {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox'], // Add this line if you face sandboxing issues
    });

    const page = await browser.newPage();
    await page.setContent(htmlContent);
    await page.pdf({ path: 'src/output.pdf', format: 'A4' });

    await browser.close();
  }
}
