import { useCallback, useMemo, useState } from "react";
import { MoneyWithId } from "./MoneyWithId";
import { calculateAmount, sortByAmount } from "../../domains/models/Money";
import { partition } from "lodash/fp";
import { ChangeCalculator } from "../../domains/ChangeCalculator";
import { PerfectPayCalculator } from "../../domains/PerfectPayCalculator";

const getRandomPrice = (maxPrice: number) =>
  Math.floor(Math.random() * maxPrice);

export const useGame = (onGameOver: () => void) => {
  const [life, setLife] = useState(3);
  const missLife = useCallback(() => {
    const nextLife = life - 1;
    if (nextLife === 0) onGameOver();
    setLife(nextLife);
  }, [life, onGameOver]);

  const [walletMonies, setWalletMonies] = useState<MoneyWithId[]>([
    MoneyWithId(10000)
  ]);
  const totalAmount = useMemo(() => calculateAmount(walletMonies), [
    walletMonies
  ]);
  const [price, setPrice] = useState(getRandomPrice(10000));
  const [selectedMonies, setSelectedMonies] = useState<{ [id: number]: true }>(
    {}
  );

  const isSelectedMoney = useCallback(
    (money: MoneyWithId): boolean => selectedMonies[money.id] || false,
    [selectedMonies]
  );

  const selectAsCandidate = useCallback(
    (money: MoneyWithId) => () => {
      if (selectedMonies[money.id]) {
        const nextSelectedMonies = { ...selectedMonies };
        delete nextSelectedMonies[money.id];
        setSelectedMonies(nextSelectedMonies);
      } else {
        setSelectedMonies({
          ...selectedMonies,
          [money.id]: true
        });
      }
    },
    [selectedMonies]
  );

  const pay = useCallback(() => {
    const [payCandidates, remains] = partition<MoneyWithId>(
      wm => selectedMonies[wm.id]
    )(walletMonies);

    if (price > calculateAmount(payCandidates)) {
      missLife();
    } else {
      const changes = new ChangeCalculator(price, {
        use2000: { probability: 0.2 }
      })
        .calculateChange(payCandidates)
        .map(MoneyWithId);
      let nextWalletMonies = sortByAmount(
        remains.concat(changes)
      ) as MoneyWithId[];
      if (
        !new PerfectPayCalculator().isPerfectPay(
          payCandidates,
          changes,
          nextWalletMonies
        )
      ) {
        missLife();
      } else {
        // 残金が少ないなら10000円を補充
        if (calculateAmount(nextWalletMonies) < 500) {
          nextWalletMonies = [MoneyWithId(10000)].concat(nextWalletMonies);
        }
        setWalletMonies(nextWalletMonies);
        setPrice(getRandomPrice(calculateAmount(nextWalletMonies)));
      }
      setSelectedMonies({});
    }
  }, [missLife, price, selectedMonies, walletMonies]);

  return {
    life,
    walletMonies,
    totalAmount,
    price,
    isSelectedMoney,
    selectAsCandidate,
    pay
  };
};
