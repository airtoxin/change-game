import React from "react";
import { MoneyImage } from "../../components/MoneyImage";
import { Button } from "../../components/PayButton";
import { css } from "emotion";
import { useGame } from "./useGame";

export type Props = {
  onGameOver: () => void;
};

export const GameScene: React.FunctionComponent<Props> = ({ onGameOver }) => {
  const {
    life,
    walletMonies,
    totalAmount,
    price,
    isSelectedMoney,
    selectAsCandidate,
    pay
  } = useGame(onGameOver);

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      })}
    >
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          bottom: 0,
          right: 0
        })}
      >
        {Array.from(Array(life)).map(() => (
          <img
            key={Math.random()}
            src="/img/creditcard.png"
            alt="life"
            className={css({ height: "3rem" })}
          />
        ))}
      </div>
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
      <Button onClick={pay} className={css({ width: "100%" })}>
        <img src="/img/pay.png" alt="pay" className={css({ height: "5rem" })} />
      </Button>
    </div>
  );
};
