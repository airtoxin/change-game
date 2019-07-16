import React, { useState } from "react";
import { MoneyImage } from "../../components/MoneyImage";
import { Money } from "../../models/Money";

export const GameScene: React.FunctionComponent = () => {
  const [walletMoneyAmount, setWalletMoneyAmount] = useState<Money[]>([
    Money(10000)
  ]);

  return (
    <div>
      <MoneyImage money={Money(1)} />
      <MoneyImage money={Money(5)} />
      <MoneyImage money={Money(10)} />
      <MoneyImage money={Money(50)} />
      <MoneyImage money={Money(100)} />
      <MoneyImage money={Money(500)} />
      <MoneyImage money={Money(1000)} />
      <MoneyImage money={Money(2000)} />
      <MoneyImage money={Money(5000)} />
      <MoneyImage money={Money(10000)} />
    </div>
  );
};
