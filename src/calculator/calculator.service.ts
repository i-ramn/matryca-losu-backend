import { Injectable } from '@nestjs/common';
import { computeSum } from '../utils/computeSum';
import { calculatedDates } from '../utils/claculateMainCoordintates';

@Injectable()
export class CalculatorService {
  calculate(date: string) {
    const [day, month, year] = date
      .split('.')
      .map(Number)
      .map((el) => computeSum(el));

    return calculatedDates(day, month, year);
  }
}
