import { Money, MoneyAmount } from "../../domains/models/Money";

export type MoneyWithId = Money & {
  id: number;
};

export const MoneyWithId = (arg: MoneyAmount | Money): MoneyWithId => ({
  id: Math.random(),
  amount: typeof arg === "number" ? arg : arg.amount
});
