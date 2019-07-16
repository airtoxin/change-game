import React, { useCallback, useState } from "react";
import { TitleScene } from "./TitleScene";
import { GameScene } from "./GameScene";
import { GameOverScene } from "./GameOverScene";

export type Scene = "title" | "game" | "gameOver";

export const Game: React.FunctionComponent = () => {
  const [scene, setScene] = useState<Scene>("title");
  const toGameScene = useCallback(() => setScene("game"), []);
  const toGameOverScene = useCallback(() => setScene("gameOver"), []);
  const toTitleScene = useCallback(() => setScene("title"), []);

  switch (scene) {
    case "title":
      return <TitleScene onStart={toGameScene} />;
    case "game":
      return <GameScene onGameOver={toGameOverScene} />;
    case "gameOver":
      return <GameOverScene onRetry={toTitleScene} />;
  }
};
