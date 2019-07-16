import React, { useCallback, useEffect, useState } from "react";
import { MoneyImage } from "../../components/MoneyImage";
import { MoneyWithId } from "./MoneyWithId";
import { ChangeCalculator } from "../../domains/ChangeCalculator";

export const GameScene: React.FunctionComponent = () => {
  const [walletMonies, setWalletMonies] = useState<MoneyWithId[]>([
    MoneyWithId(10000)
  ]);
  const [price, setPrice] = useState(Math.floor(Math.random() * 10000));

  const pay = useCallback(
    (money: MoneyWithId) => () => {
      const changes = new ChangeCalculator(price).calculateChange([money]);
      setWalletMonies(changes.map(MoneyWithId));
    },
    [walletMonies, price]
  );

  return (
    <div>
      <div>
        <h2>値段: {price}</h2>
      </div>
      <div>
        <h2>支払え！</h2>
        <div>
          {walletMonies.map(money => (
            <MoneyImage key={money.id} money={money} onClick={pay(money)} />
          ))}
        </div>
      </div>
    </div>
  );
};
