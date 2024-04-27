import { CalculatorService } from './calculator.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('calculate')
export class CalculatorController {
  constructor(private calculateService: CalculatorService) {}

  @Get('/:date')
  calculator(@Param('date') date: string) {
    return this.calculateService.fillHtmlTemplateWithDataFromDatabase(date);
  }
}
