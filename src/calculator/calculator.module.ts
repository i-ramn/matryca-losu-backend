import { Module } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { CalculatorController } from './calculator.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Articles } from '../articles/articles.model';
import { CompatibilityArticles } from '../articles/compatibility-articles.model';

@Module({
  providers: [CalculatorService],
  controllers: [CalculatorController],
  imports: [SequelizeModule.forFeature([Articles, CompatibilityArticles])],
  exports: [CalculatorService],
})
export class CalculatorModule {}
