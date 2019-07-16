import React from "react";
import { css } from "emotion";
import { Button } from "../../components/PayButton";

export type Props = {
  onRetry: () => void;
};

export const GameOverScene: React.FunctionComponent<Props> = ({ onRetry }) => {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        justifyContent: "center"
      })}
    >
      <img
        src="/img/gameover.png"
        alt="gameover"
        className={css({ opacity: 0.3 })}
      />
      <h1
        className={css({
          width: "fit-content",
          color: "red",
          fontSize: "3rem",
          transform: "rotate(30deg)",
          position: "absolute",
          top: "50%",
          margin: "0 auto 0"
        })}
      >
        ゲームオーバー
      </h1>
      <Button className={css({ width: "100%" })} onClick={onRetry}>
        やり直す
      </Button>
    </div>
  );
};
