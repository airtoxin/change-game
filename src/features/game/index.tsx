import React, { useCallback, useState } from "react";
import { TitleScene } from "./TitleScene";
import { GameScene } from "./GameScene";

export type Scene = "title" | "game" | "gameOver";

export const Game: React.FunctionComponent = () => {
  const [scene, setScene] = useState<Scene>("title");
  const toGameScene = useCallback(() => setScene("game"), []);

  switch (scene) {
    case "title":
      return <TitleScene onStart={toGameScene} />;
    case "game":
      return <GameScene />;
    case "gameOver":
      return <div>gameOver</div>;
  }
};
