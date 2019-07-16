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

export const Money = (amount: MoneyAmount) => ({
  amount
});
