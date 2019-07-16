import React, { useCallback } from "react";
import { css } from "emotion";

const assetPaths = [
  "/img/baramaki_1.png",
  "/img/baramaki_2.png",
  "/img/creditcard.png",
  "/img/gameover.png",
  "/img/miss.png",
  "/img/money_1.png",
  "/img/money_5.png",
  "/img/money_10.png",
  "/img/money_50.png",
  "/img/money_100.png",
  "/img/money_500.png",
  "/img/money_1000.png",
  "/img/money_2000.png",
  "/img/money_5000.png",
  "/img/money_10000.png",
  "/img/navigation_go.png",
  "/img/pay.png"
];

let loadedCount = 0;

export type Props = {
  onLoadAssets: () => void;
};

export const AssetsLoader: React.FunctionComponent<Props> = ({
  onLoadAssets
}) => {
  const onLoadAsset = useCallback(() => {
    loadedCount = loadedCount + 1;
    if (loadedCount === assetPaths.length) onLoadAssets();
  }, []);

  return (
    <div
      className={css({
        position: "absolute",
        visibility: "hidden",
        top: -9999,
        left: -9999
      })}
    >
      {assetPaths.map(assetPath => (
        <Asset key={assetPath} assetPath={assetPath} onLoad={onLoadAsset} />
      ))}
    </div>
  );
};

const Asset: React.FunctionComponent<{
  assetPath: string;
  onLoad: () => void;
}> = ({ assetPath, onLoad }) => {
  return (
    <img
      src={assetPath}
      alt={assetPath}
      ref={(node: HTMLImageElement | null) => {
        if (node) {
          node.onload = onLoad;
        }
      }}
    />
  );
};
