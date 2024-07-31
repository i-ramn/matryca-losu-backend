import { Module } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { CalculatorController } from './calculator.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Articles } from '../articles/articles.model';
import { CompatibilityArticles } from '../articles/compatibility-articles.model';
import { ChildrenArticles } from '../articles/children-articles.model';
import { YearsService } from './years.service';

@Module({
  providers: [CalculatorService, YearsService],
  controllers: [CalculatorController],
  imports: [
    SequelizeModule.forFeature([
      Articles,
      CompatibilityArticles,
      ChildrenArticles,
    ]),
  ],
  exports: [CalculatorService, YearsService],
})
export class CalculatorModule {}
