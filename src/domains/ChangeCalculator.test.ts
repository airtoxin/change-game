import "jest";
import { ChangeCalculator } from "./ChangeCalculator";
import { Money } from "./models/Money";

describe("ChangeCalculator", () => {
  it("should calculate changes", () => {
    const price = 500;
    const changeCalculator = new ChangeCalculator(price);
    const yen5000 = Money(5000);

    expect(changeCalculator.calculateChange([yen5000])).toEqual([
      Money(1000),
      Money(1000),
      Money(1000),
      Money(1000),
      Money(500)
    ]);
  });
});
