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

  @Get('/:folderId')
  getDocumentById(@Param('folderId') folderId: string) {
    return this.googleDriveService.listFilesInFolder(folderId);
  }

  @Get('read/:fileId')
  readDocumentById(@Param('fileId') folderId: string) {
    return this.googleDriveService.readGoogleDocContent(folderId);
  }
}
