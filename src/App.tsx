import React from "react";
import normalize from "emotion-normalize";
import { css as globalCss, Global } from "@emotion/core";
import { Game } from "./features/game";

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
  return (
    <>
      <Global styles={globalStyle} />
      <Game />
    </>
  );
};
