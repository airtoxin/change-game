import React from "react";
import { MoneyImage } from "../../components/MoneyImage";
import { Button } from "../../components/PayButton";
import { css } from "emotion";
import { useGame } from "./useGame";

export const GameScene: React.FunctionComponent = () => {
  const {
    walletMonies,
    totalAmount,
    price,
    isSelectedMoney,
    selectAsCandidate,
    pay
  } = useGame();

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      })}
    >
      <h2>値段: ¥{price}</h2>
      <div>
        {walletMonies.map(money => (
          <MoneyImage
            key={money.id}
            money={money}
            isActive={isSelectedMoney(money)}
            onClick={selectAsCandidate(money)}
          />
        ))}
      </div>
      <h2>財布: ¥{totalAmount}</h2>
      <Button onClick={pay} className={css({ width: "80%" })}>
        支払う！
      </Button>
    </div>
  );
};
