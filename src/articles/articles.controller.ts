import { Controller, Get, Redirect, Query, Res } from '@nestjs/common';
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

  // @Get('/:folderId')
  // async getDocumentById(@Param('folderId') folderId: string) {
  //   await this.googleDriveService.generateObjectFromFolders(folderId);
  // }

  @Get('read')
  async readDocumentById() {
    return await this.googleDriveService.saveDataFromJson();
  }
}
