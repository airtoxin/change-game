import "jest";
import { Money } from "./models/Money";
import { PerfectPayCalculator } from "./PerfectPayCalculator";

describe("PerfectPayCalculator", () => {
  it("should return true when pay exact amount", () => {
    const payMonies = [
      Money(1000),
      Money(1000),
      Money(500),
      Money(100),
      Money(100),
      Money(10),
      Money(10),
      Money(10),
      Money(10),
      Money(1)
    ];
    const changeMonies: Money[] = [];
    const walletMoniesAfterPayed = [Money(5000), Money(1000)];

    expect(
      new PerfectPayCalculator().isPerfectPay(
        payMonies,
        changeMonies,
        walletMoniesAfterPayed
      )
    ).toBe(true);
  });

  it("should return true when pay more amount", () => {
    // price = 1234
    // wallet = 1,1,1,10,10,10,10,1000,1000 = 2043
    // pay = 10,10,10,10,1000,1000 = 2040
    // change = 806 = 500,100,100,5,1
    const payMonies = [
      Money(1000),
      Money(1000),
      Money(10),
      Money(10),
      Money(10),
      Money(10)
    ];
    const changeMonies = [
      Money(500),
      Money(100),
      Money(100),
      Money(5),
      Money(1)
    ];
    const walletMoniesAfterPayed = [
      Money(500),
      Money(100),
      Money(100),
      Money(5),
      Money(1),
      Money(1),
      Money(1),
      Money(1)
    ];

    expect(
      new PerfectPayCalculator().isPerfectPay(
        payMonies,
        changeMonies,
        walletMoniesAfterPayed
      )
    ).toBe(true);
  });

  it("should return false when pay is redundant", () => {
    // price = 1234
    // wallet = 1000,1000,500
    // pay = 1000,1000,500
    // change = 1266 = 1000,100,100,50,10,5,1
    const payMonies = [Money(1000), Money(1000), Money(500)];
    const changeMonies = [
      Money(1000),
      Money(100),
      Money(100),
      Money(50),
      Money(10),
      Money(5),
      Money(1)
    ];
    const walletMoniesAfterPayed = [
      Money(1000),
      Money(100),
      Money(100),
      Money(50),
      Money(10),
      Money(5),
      Money(1)
    ];

    expect(
      new PerfectPayCalculator().isPerfectPay(
        payMonies,
        changeMonies,
        walletMoniesAfterPayed
      )
    ).toBe(false);
  });
});
