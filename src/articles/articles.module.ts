import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { TokenService } from './token.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Articles } from './articles.model';
import { CompatibilityArticles } from './compatibility-articles.model';

@Module({
  providers: [ArticlesService, TokenService],
  controllers: [ArticlesController],
  imports: [SequelizeModule.forFeature([Articles, CompatibilityArticles])],
})
export class ArticlesModule {}
