import { computeSum } from './computeSum';

export const calculatedDates = (day: number, month: number, year: number) => {
  const fourth = computeSum(day + month + year);
  const five = computeSum(day + month + year + fourth);
  const six = computeSum(day + month);
  const seven = computeSum(month + year);
  const eight = computeSum(year + fourth);
  const nine = computeSum(day + fourth);
  const ten = computeSum(six + seven + eight + nine);
  const eleven = computeSum(fourth + five);
  const twelve = computeSum(eleven + fourth);
  const thirteen = computeSum(month + five);
  const fourteen = computeSum(thirteen + month);
  const fifteen = computeSum(year + five);
  const sixteen = computeSum(fifteen + eleven);
  const seventeen = computeSum(eleven + sixteen);
  const eighteen = computeSum(fifteen + sixteen);
  const nineteen = computeSum(fifteen + year);
  const twenty = computeSum(day + five);
  const twentyOne = computeSum(day + twenty);
  const twentyTwo = computeSum(six + ten);
  const twentyThree = computeSum(six + twentyTwo);
  const twentyFour = computeSum(eight + ten);
  const twentyFive = computeSum(eight + twentyFour);
  const twentySix = computeSum(seven + ten);
  const twentySeven = computeSum(seven + twentySix);
  const twentyEight = computeSum(nine + ten);
  const twentyNine = computeSum(nine + twentyEight);
  const thirty = computeSum(twenty + five);
  const thirtyOne = computeSum(thirteen + five);
  const thirtyTwo = computeSum(five + ten);
  /////////////////////////////////////////
  const thirtyThree = computeSum(day + six);
  const thirtyFour = computeSum(thirtyThree + day);
  const thirtyFive = computeSum(thirtyThree + six);
  const thirtySix = computeSum(thirtyFour + day);
  const thirtySeven = computeSum(thirtyFour + thirtyThree);
  const thirtyEight = computeSum(thirtyThree + thirtyFive);
  const thirtyNine = computeSum(thirtyFive + six);
  const forty = computeSum(six + month);
  const fortyOne = computeSum(forty + six);
  const fortyTwo = computeSum(month + forty);
  const fortyThree = computeSum(fortyOne + six);
  const fortyFour = computeSum(fortyOne + forty);
  const fortyFive = computeSum(forty + fortyTwo);
  const fortySix = computeSum(fortyTwo + month);
  const fortySeven = computeSum(month + seven);
  const fortyEight = computeSum(month + fortySeven);
  const fortyNine = computeSum(fortySeven + seven);
  const fifty = computeSum(month + fortyEight);
  const fiftyOne = computeSum(fortyEight + fortySeven);
  const fiftyTwo = computeSum(fortySeven + fortyNine);
  const fiftyThree = computeSum(fortyNine + seven);
  const fiftyFour = computeSum(seven + year);
  const fiftyFive = computeSum(seven + fiftyFour);
  const fiftySix = computeSum(fiftyFour + year);
  const fiftySeven = computeSum(seven + fiftyFive);
  const fiftyEight = computeSum(fiftyFive + fiftyFour);
  const fiftyNine = computeSum(fiftyFour + fiftySix);
  const sixty = computeSum(fiftySix + year);
  const sixtyOne = computeSum(year + eight);
  const sixtyTwo = computeSum(sixtyOne + year);
  const sixtyThree = computeSum(sixtyOne + eight);
  const sixtyFour = computeSum(sixtyTwo + year);
  const sixtyFive = computeSum(sixtyTwo + sixtyOne);
  const sixtySix = computeSum(sixtyThree + sixtyOne);
  const sixtySeven = computeSum(sixtyThree + eight);
  const sixtyEight = computeSum(fourth + eight);
  const sixtyNine = computeSum(sixtyEight + eight);
  const seventy = computeSum(sixtyEight + fourth);
  const seventyOne = computeSum(sixtyNine + eight);
  const seventyTwo = computeSum(sixtyNine + sixtyEight);
  const seventyThree = computeSum(sixtyEight + seventy);
  const seventyFour = computeSum(seventy + fourth);
  const seventyFive = computeSum(fourth + nine);
  const seventySix = computeSum(seventyFive + fourth);
  const seventySeven = computeSum(seventyFive + nine);
  const seventyEight = computeSum(seventySix + fourth);
  const seventyNine = computeSum(seventyFive + seventySix);
  const eighty = computeSum(seventySeven + seventyFive);
  const eightyOne = computeSum(nine + seventySeven);
  const eightyTwo = computeSum(day + nine);
  const eightyThree = computeSum(eightyTwo + nine);
  const eightyFour = computeSum(eightyTwo + day);
  const eightyFive = computeSum(eightyThree + nine);
  const eightySix = computeSum(eightyTwo + eightyThree);
  const eightySeven = computeSum(eightyFour + eightyTwo);
  const eightyEight = computeSum(eightyFour + day);
  const eightyNine = computeSum(six + eight);
  const ninety = computeSum(seven + nine);
  const ninetyOne = computeSum(month + fourth);
  const ninetyTwo = computeSum(day + year);
  const ninetyThree = computeSum(ninetyOne + ninetyTwo);
  const ninetyFour = computeSum(eightyNine + ninety);
  const ninetyFive = computeSum(ninetyThree + ninetyFour);
  const ninetySix = computeSum(day + month);
  const ninetySeven = computeSum(twentyOne + fourteen);
  const ninetyEight = computeSum(twenty + thirteen);
  const ninetyNine = computeSum(thirty + thirtyOne);
  const hundred = computeSum(five + five);
  const hundredOne = computeSum(eleven + fifteen);
  const hundredTwo = computeSum(fourth + year);
  //1+21+20+30+5+15+3
  const hundredThree = computeSum(
    day + twentyOne + twenty + thirty + five + fifteen + year,
  );
  //2+14+13+31+5+11+4
  const hundredFour = computeSum(
    month + fourteen + thirteen + thirtyOne + five + eleven + fourth,
  );
  //96+97+98+99+100+101+102
  const hundredFive = computeSum(
    ninetySix +
      ninetySeven +
      ninetyEight +
      ninetyNine +
      hundred +
      hundredOne +
      hundredTwo,
  );

  const hundredSix = computeSum(
    day +
      month +
      year +
      fourth +
      five +
      six +
      seven +
      eight +
      nine +
      ten +
      eleven +
      twelve +
      thirteen +
      fourteen +
      fifteen +
      sixteen +
      seventeen +
      eighteen +
      nineteen +
      twenty +
      twentyOne +
      twentyTwo +
      twentyThree +
      twentyFour +
      twentyFive +
      twentySix +
      twentySeven +
      twentyEight +
      twentyNine +
      thirty +
      thirtyOne +
      thirtyTwo +
      thirtyThree +
      thirtyFour +
      thirtyFive +
      thirtySix +
      thirtySeven +
      thirtyEight +
      thirtyNine +
      forty +
      fortyOne +
      fortyTwo +
      fortyThree +
      fortyFour +
      fortyFive +
      fortySix +
      fortySeven +
      fortyEight +
      fortyNine +
      fifty +
      fiftyOne +
      fiftyTwo +
      fiftyThree +
      fiftyFour +
      fiftyFive +
      fiftySix +
      fiftySeven +
      fiftyEight +
      fiftyNine +
      sixty +
      sixtyOne +
      sixtyTwo +
      sixtyThree +
      sixtyFour +
      sixtyFive +
      sixtySix +
      sixtySeven +
      sixtyEight +
      sixtyNine +
      seventy +
      seventyOne +
      seventyTwo +
      seventyThree +
      seventyFour +
      seventyFive +
      seventySix +
      seventySeven +
      seventyEight +
      eighty +
      eightyOne +
      eightyTwo +
      eightyThree +
      eightyFour +
      eightyFive +
      eightySix +
      eightySeven +
      eightyEight +
      eightyNine +
      ninety +
      ninetyOne +
      ninetyTwo +
      ninetyThree +
      ninetyFour +
      ninetyFive +
      ninetySix +
      ninetySeven +
      ninetyEight +
      ninetyNine +
      hundred +
      hundredOne +
      hundredTwo +
      hundredThree +
      hundredFour +
      hundredFive,
  );

  return {
    a: day,
    a1: twentyOne,
    a2: twenty,
    a3: thirty,
    b: month,
    b1: fourteen,
    b2: thirteen,
    b3: thirtyOne,
    c: year,
    c1: nineteen,
    c2: fifteen,
    d: fourth,
    d1: twelve,
    d2: eleven,
    e: five,
    e1: ten,
    e2: thirtyTwo,
    f: six,
    f1: twentyThree,
    f2: twentyTwo,
    g: seven,
    g1: twentySeven,
    g2: twentySix,
    h: eight,
    h1: twentyFive,
    h2: twentyFour,
    i: nine,
    i1: twentyNine,
    i2: twentyEight,
    x: sixteen,
    x1: seventeen,
    x2: eighteen,
    ya: thirtySix,
    ya1: thirtyFour,
    ya2: thirtySeven,
    ya3: thirtyThree,
    ya4: thirtyEight,
    ya5: thirtyFive,
    ya6: thirtyNine,
    yf: fortyThree,
    yf1: fortyOne,
    yf2: fortyFour,
    yf3: forty,
    yf4: fortyFive,
    yf5: fortyTwo,
    yf6: fortySix,
    yb: fifty,
    yb1: fortyEight,
    yb2: fiftyOne,
    yb3: fortySeven,
    yb4: fiftyTwo,
    yb5: fortyNine,
    yb6: fiftyThree,
    yg: fiftySeven,
    yg1: fiftyFive,
    yg2: fiftyEight,
    yg3: fiftyFour,
    yg4: fiftyNine,
    yg5: fiftySix,
    yg6: sixty,
    yc: sixtyFour,
    yc1: sixtyTwo,
    yc2: sixtyFive,
    yc3: sixtyOne,
    yc4: sixtySix,
    yc5: sixtyThree,
    yc6: sixtySeven,
    yh: seventyOne,
    yh1: sixtyNine,
    yh2: seventyTwo,
    yh3: sixtyEight,
    yh4: seventyThree,
    yh5: seventy,
    yh6: seventyFour,
    yd: seventyEight,
    yd1: seventySix,
    yd2: seventyNine,
    yd3: seventyFive,
    yd4: eighty,
    yd5: seventySeven,
    yd6: eightyOne,
    yi: eightyFive,
    yi1: eightyThree,
    yi2: eightySix,
    yi3: eightyTwo,
    yi4: eightySeven,
    yi5: eightyFour,
    yi6: eightyEight,
    ca: day,
    ca1: month,
    ca2: ninetySix,
    cb: twentyOne,
    cb1: fourteen,
    cb2: ninetySeven,
    cc: twenty,
    cc1: thirteen,
    cc2: ninetyEight,
    cd: thirty,
    cd1: thirtyOne,
    cd2: ninetyOne,
    ce: five,
    ce1: five,
    ce2: hundred,
    cf: eleven,
    cf1: fifteen,
    cf2: hundredOne,
    cg: fourth,
    cg1: year,
    cg2: hundredTwo,
    ch: hundredThree,
    ch1: hundredFour,
    ch2: hundredFive,
    ci: ninetyNine,
    pa: six,
    pa1: eight,
    pa2: eightyNine,
    pb: seven,
    pb1: nine,
    pb2: ninety,
    pc: ninetyOne,
    pc1: ninetyTwo,
    pc2: ninetyThree,
    pd: eightyNine,
    pd1: ninety,
    pd2: ninetyFour,
    pe: ninetyThree,
    pe1: ninetyFour,
    pe2: ninetyFive,
    pf: hundredFive,
    ps: hundredSix,
  };
};
