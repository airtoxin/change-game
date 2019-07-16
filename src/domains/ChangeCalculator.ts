import { calculateAmount, Money, monies } from "./models/Money";
import { sortBy } from "lodash/fp";

const sortedByAmountMonies = sortBy<Money>(money => -money.amount)(monies);

export class ChangeCalculator {
  constructor(
    private price: number,
    private options: {
      use2000:
        | false
        | {
            probability: number; // 0 ~ 1
          };
    } = { use2000: false }
  ) {}

  calculateChange(payedMonies: Money[]): Money[] {
    const totalPayedAmount = calculateAmount(payedMonies);
    let changeAmount = totalPayedAmount - this.price;

    const resultChangeMonies: Money[] = [];
    for (const money of sortedByAmountMonies) {
      if (money.amount === 2000) {
        if (
          !this.options.use2000 ||
          Math.random() > this.options.use2000.probability
        ) {
          continue;
        }
      }

      const numChangeMonies = Math.floor(changeAmount / money.amount);
      resultChangeMonies.push(...Array(numChangeMonies).fill(money));
      changeAmount -= money.amount * numChangeMonies;
    }

    return resultChangeMonies;
  }
}
