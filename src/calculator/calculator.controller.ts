import { CalculatorService } from './calculator.service';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { YearsService } from './years.service';

@Controller('calculate')
export class CalculatorController {
  constructor(
    private readonly calculateService: CalculatorService,
    private readonly yearService: YearsService,
  ) {}

  @Get('date/:date')
  calculator(@Param('date') date: string) {
    return this.calculateService.fillHtmlTemplateWithDataFromDatabase(date);
  }

  @Get('children/:date')
  calculateChildren(@Param('date') date: string) {
    return this.calculateService.fillChildrenTemplate(date);
  }

  @Get('compatibility')
  calculateCompatibility(
    @Query('date1') date1: string,
    @Query('date2') date2: string,
  ) {
    return this.calculateService.fillHtmlCompatibilityTemplate(date1, date2);
  }

  @Get('year/:date')
  calculateYear(@Param('date') date: string) {
    return this.yearService.fillHtmlYearsTemplate(date);
  }
}
