export const computeSum = (sum: number): number => {
  while (sum > 22) {
    sum = [...sum.toString()].reduce((acc, curr) => acc + Number(curr), 0);
  }

  return sum;
};
