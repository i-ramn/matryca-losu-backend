import { Inject, Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import { drive_v3, google } from 'googleapis';
import { TokenService } from './token.service';

config();

@Injectable()
export class ArticlesService {
  private readonly drive: drive_v3.Drive;

  constructor(
    @Inject(TokenService) private readonly tokenService: TokenService,
  ) {
    this.drive = google.drive({
      version: 'v3',
      auth: this.tokenService.getOAuth2Client(),
    });
  }

  async listFilesInFolder(folderId: string): Promise<drive_v3.Schema$File[]> {
    try {
      console.log('Listing files in folder:', folderId);

      const response = await this.drive.files.list({
        q: `'${folderId}' in parents and trashed=false`,
        fields: 'files(id, name, mimeType)',
      } as any);

      const files = response.data.files || [];

      return files as drive_v3.Schema$File[];
    } catch (error) {
      console.error('Error listing files:', error.message);
      throw new Error('Failed to list files');
    }
  }
}
