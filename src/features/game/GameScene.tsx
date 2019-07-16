import React, { useEffect, useRef, useState } from "react";
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
  const [showMissOverlay, setShowMissOverlay] = useState(false);
  const prevLife = useRef<number>(life);
  useEffect(() => {
    if (life !== prevLife.current && life !== 0) {
      setShowMissOverlay(true);

      const timer = setTimeout(() => setShowMissOverlay(false), 1000);
      return () => clearTimeout(timer);
    }

    prevLife.current = life;
  }, [life]);

  const absolutelyCenterCss = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    width: "100vw",
    height: "100vh",
    margin: "0 auto 0"
  });
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      })}
    >
      {showMissOverlay && (
        <div
          className={[
            absolutelyCenterCss,
            css({
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              zIndex: 10
            })
          ].join(" ")}
        >
          <h1
            className={[
              absolutelyCenterCss,
              css({ color: "red", fontSize: "5rem", zIndex: 11 })
            ].join(" ")}
          >
            ミス！
          </h1>
          <img
            src="/img/miss.png"
            alt="miss"
            className={[
              absolutelyCenterCss,
              css({ maxWidth: "50vw", height: "auto" })
            ].join(" ")}
          />
        </div>
      )}
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: 100
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
