import { Money } from "./models/Money";

type Counter = {
  [amount: number]: number;
};

const getTopDigit = (num: number): number =>
  Number.parseInt(num.toString()[0], 10);

export class PerfectPayCalculator {
  isPerfectPay(
    payMonies: Money[],
    changeMonies: Money[],
    walletMoniesAfterPayed: Money[]
  ): boolean {
    const walletPerfection = Object.entries(
      this.countMonies(walletMoniesAfterPayed)
    ).every(([amountString, count]) => {
      const amount = Number(amountString);

      switch (getTopDigit(amount)) {
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
    if (!walletPerfection) return false;

    return payMonies.every(
      payMoney =>
        !changeMonies.find(
          changeMoney => changeMoney.amount === payMoney.amount
        )
    );
  }

  private countMonies(monies: Money[]): Counter {
    const counters: Counter = {};

    for (const money of monies) {
      counters[money.amount] = (counters[money.amount] || 0) + 1;
    }

    return counters;
  }
}
