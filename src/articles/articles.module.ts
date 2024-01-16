import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { TokenService } from './token.service';

@Module({
  providers: [ArticlesService, TokenService],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
