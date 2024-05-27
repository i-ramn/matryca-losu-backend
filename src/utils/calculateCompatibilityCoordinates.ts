import { computeSum } from './computeSum';

export const calculatedComp = (date1: string, date2: string) => {
  const [day1, month1, year1] = date1
    .split('.')
    .map(Number)
    .map((el) => computeSum(el));

  const [day2, month2, year2] = date2
    .split('.')
    .map(Number)
    .map((el) => computeSum(el));

  const one = computeSum(day1 + day2);
  const two = computeSum(month1 + month2);
  const three = computeSum(year1 + year2);
  const four = computeSum(one + two + three);
  const five = computeSum(one + two + three + four);
  const six = computeSum(one + two);
  const seven = computeSum(two + three);
  const eight = computeSum(three + four);
  const nine = computeSum(one + four);
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
  const twentyTwo = computeSum(six + eight);
  const twentyThree = computeSum(seven + nine);
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
    h: eight,
    i: nine,
    x: twenty,
    x1: eighteen,
    x2: nineteen,
    j: twentyFive,
    j1: twentyOne,
    j2: twentyFour,
    j3: twentyTwo,
    j4: twentyThree,
  };
};
