import React, { useCallback, useState } from "react";
import normalize from "emotion-normalize";
import { css as globalCss, Global } from "@emotion/core";
import { Game } from "./features/game";
import { AssetsLoader } from "./components/AssetsLoader";
import { ClipLoader } from "react-spinners";

const globalStyle = globalCss`
  ${normalize}
  html, body {
    margin: 0;
    padding: 0;
  }
  * {
    user-select: none;
    user-drag: none;
  }
`;

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const onLoadAssets = useCallback(() => setIsLoading(false), []);
  return (
    <>
      <Global styles={globalStyle} />
      <AssetsLoader onLoadAssets={onLoadAssets} />
      {isLoading ? <ClipLoader /> : <Game />}
    </>
  );
};
