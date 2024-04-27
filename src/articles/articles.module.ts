import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { TokenService } from './token.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Articles } from './articles.model';

@Module({
  providers: [ArticlesService, TokenService],
  controllers: [ArticlesController],
  imports: [SequelizeModule.forFeature([Articles])],
})
export class ArticlesModule {}
