import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import { drive_v3, google } from 'googleapis';
import * as fs from 'fs';

config();

@Injectable()
export class TokenService {
  private readonly oauth2Client: any;
  private readonly drive: drive_v3.Drive;

  constructor() {
    this.oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI,
    );

    this.drive = google.drive({
      version: 'v3',
      auth: this.oauth2Client,
    });

    try {
      const creds = fs.readFileSync('src/credentials.json');
      this.oauth2Client.setCredentials(JSON.parse(creds.toString()));
    } catch (error) {
      console.log('Error loading credentials:', error.message);
    }
  }

  async getAccessToken(code: string): Promise<void> {
    try {
      const { tokens } = await this.oauth2Client.getToken(code);
      fs.writeFileSync('src/credentials.json', JSON.stringify(tokens));
    } catch (error) {
      console.error('Error getting access token:', error.message);
      throw new Error('Failed to get access token');
    }
  }

  generateAuthUrl(): string {
    return this.oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: ['https://www.googleapis.com/auth/drive'],
    });
  }

  getOAuth2Client(): any {
    return this.oauth2Client;
  }
}
