import React, { useEffect, useMemo, useState } from "react";
import { css } from "emotion";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export type Props = {
  onStart: () => any;
};

export const TitleScene: React.FunctionComponent<Props> = ({ onStart }) => {
  const [position, setPosition] = useState("0");
  const { width, height } = useWindowSize();

  useEffect(() => {
    setPosition("20vw");
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition(position === "0" ? "20vw" : "0");
    }, 1000);

    return () => clearInterval(intervalId);
  }, [position]);

  const classNameRight = useMemo(
    () =>
      css({
        position: "absolute",
        height: "30vh",
        top: "40vh",
        right: "-10vw",
        transition: "all 1s linear",
        transform: `translateX(-${position})`
      }),
    [position]
  );

  const classNameLeft = useMemo(
    () =>
      css({
        position: "absolute",
        height: "30vh",
        top: "40vh",
        left: "-10vw",
        transition: "all 1s linear",
        transform: `scaleX(-1) translateX(-${position})`
      }),
    [position]
  );

  const classNameContainer = useMemo(
    () =>
      css({
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center"
      }),
    []
  );
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  useEffect(() => {
    const img = new Image();
    img.src = `/img/money_10000.png`;
    img.onload = () => setImage(img);
  }, []);

  return (
    <div className={classNameContainer}>
      {image && (
        <Confetti
          canvasRef={null as any}
          style={{ zIndex: -1 }}
          numberOfPieces={40}
          width={width}
          height={height}
          drawShape={ctx => {
            ctx.drawImage(image, 0, 0, 50, 30);
          }}
        />
      )}
      <h1>釣り銭ゲーム</h1>
      <h2>お釣りが少なくなるように支払いをしよう！</h2>
      <button
        onClick={onStart}
        className={css({
          width: "auto",
          padding: 0,
          margin: 0,
          background: "none",
          border: 0,
          fontSize: 0,
          lineHeight: 0,
          overflow: "visible",
          cursor: "pointer"
        })}
      >
        <img src="/img/navigation_go.png" alt="navigation_go" />
      </button>
      <img
        className={classNameRight}
        src="/img/baramaki_1.png"
        alt="baramaki_1"
      />
      <img
        className={classNameLeft}
        src="/img/baramaki_2.png"
        alt="baramaki_1"
      />
    </div>
  );
};
