import { Money } from "./models/Money";

const getTopDigit = (num: number): number =>
  Number.parseInt(num.toString()[0], 10);

export const isPerfectPay = (walletMonies: Money[]): boolean => {
  const counters: { [amount: number]: number } = {};
  for (const money of walletMonies) {
    counters[money.amount] = (counters[money.amount] || 0) + 1;
  }

  return Object.entries(counters).every(([amount, count]) => {
    switch (getTopDigit(Number(amount))) {
      case 1:
        return count < 5;
      case 2:
        return count < 3;
      case 5:
        return count < 2;
      default:
        return true;
    }
  });
};
