import { sum, sortBy } from "lodash/fp";

export type MoneyAmount =
  | 1
  | 5
  | 10
  | 50
  | 100
  | 500
  | 1000
  | 2000
  | 5000
  | 10000;

export type Money = {
  amount: MoneyAmount;
};

export const moneyAmounts: MoneyAmount[] = [
  1,
  5,
  10,
  50,
  100,
  500,
  1000,
  2000,
  5000,
  10000
];

export const Money = (amount: MoneyAmount): Money => ({
  amount
});

export const monies = moneyAmounts.map(Money);

export const calculateAmount = (monies: Money[]): number =>
  sum(monies.map(m => m.amount));

export const sortByAmount = sortBy<Money>(m => -m.amount);
