import { Controller, Get, Redirect, Query, Res, Param } from '@nestjs/common';
import { Response } from 'express';
import { ArticlesService } from './articles.service';
import { TokenService } from './token.service';

@Controller('articles')
export class ArticlesController {
  constructor(
    private readonly googleDriveService: ArticlesService,
    private readonly tokenService: TokenService,
  ) {}

  @Get('google')
  @Redirect()
  async generateAuthUrl(): Promise<{ url: string }> {
    const url = this.tokenService.generateAuthUrl();
    return { url };
  }

  @Get('google/redirect')
  async handleGoogleRedirect(
    @Query('code') code: string,
    @Res() res: Response,
  ): Promise<void> {
    await this.tokenService.getAccessToken(code);
    res.send('success');
  }

  @Get('folders/:folderId')
  async getDocumentById(@Param('folderId') folderId: string) {
    return this.googleDriveService.generateObjectFromFolders(folderId);
  }

  @Get('read/matryca')
  async readDocumentById() {
    return await this.googleDriveService.parseMatryca();
  }

  @Get('read/compatibility')
  async readCompatibilityDocumentById() {
    return await this.googleDriveService.parseCompatibilityMatryca();
  }
}
