import { computeSum } from './computeSum';

interface CalculatedCompProps {
  date1: string;
  date2: string;
  firstD: number;
  secondD: number;
  firstE: number;
  secondE: number;
  firstF: number;
  secondF: number;
  firstG: number;
  secondG: number;
  firstH: number;
  secondH: number;
  firstI: number;
  secondI: number;
  firstA: number;
  secondA: number;
  firstB: number;
  secondB: number;
  firstC: number;
  secondC: number;
}

export const calculatedComp = ({
  firstD,
  secondD,
  firstE,
  secondE,
  firstF,
  secondF,
  firstG,
  secondG,
  firstH,
  secondH,
  firstI,
  secondI,
  firstA,
  secondA,
  firstB,
  secondB,
  firstC,
  secondC,
}: CalculatedCompProps) => {
  const one = computeSum(firstA + secondA);
  const two = computeSum(firstB + secondB);
  const three = computeSum(firstC + secondC);
  const four = computeSum(firstD + secondD);
  const five = computeSum(firstE + secondE);
  const six = computeSum(firstF + secondF);
  const seven = computeSum(firstG + secondG);
  const eight = computeSum(firstH + secondH);
  const nine = computeSum(firstI + secondI);
  const ten = computeSum(one + five);
  const eleven = computeSum(one + ten);

  const twelve = computeSum(two + five);
  const thirteen = computeSum(two + twelve);
  const fourteen = computeSum(three + five);
  const fifteen = computeSum(three + fourteen);
  const sixteen = computeSum(four + five);
  const seventeen = computeSum(four + sixteen);
  const eighteen = computeSum(sixteen + fourteen);
  const nineteen = computeSum(fourteen + eighteen);
  const twenty = computeSum(sixteen + eighteen);
  const twentyOne = computeSum(nine + seven);
  const _twentyOne = computeSum(two + four);
  const twentyTwo = computeSum(six + eight);
  const _twentyTwo = computeSum(one + three);
  const twentyThree = computeSum(seven + nine);
  const _twentyThree = computeSum(_twentyOne + _twentyTwo);
  const twentyFour = computeSum(twentyTwo + twentyThree);
  const twentyFive = computeSum(twentyOne + twentyFour);

  return {
    a: one,
    a1: eleven,
    a2: ten,
    b: two,
    b1: thirteen,
    b2: twelve,
    c: three,
    c1: fifteen,
    c2: fourteen,
    d: four,
    d1: seventeen,
    d2: sixteen,
    e: five,
    f: six,
    g: seven,
    gc: _twentyOne,
    h: eight,
    i: nine,
    ic: _twentyTwo,
    x: twenty,
    x1: eighteen,
    x2: nineteen,
    j: twentyFive,
    j1: _twentyThree,
    j2: twentyFour,
    j3: twentyTwo,
    j4: twentyThree,
  };
};
