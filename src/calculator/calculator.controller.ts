import { CalculatorService } from './calculator.service';
import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('calculate')
export class CalculatorController {
  constructor(private readonly calculateService: CalculatorService) {}

  @Get('date/:date')
  calculator(@Param('date') date: string) {
    return this.calculateService.fillHtmlTemplateWithDataFromDatabase(date);
  }

  @Get('compatibility')
  calculateCompatibility(
    @Query('date1') date1: string,
    @Query('date2') date2: string,
  ) {
    return this.calculateService.fillHtmlCompatibilityTemplate(date1, date2);
  }
}
