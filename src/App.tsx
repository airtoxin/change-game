import React from "react";
import normalize from "emotion-normalize";
import { Global, css as globalCss } from "@emotion/core";
import {MoneyImage} from "./components/MoneyImage";
import {Money} from "./models/Money";

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
      <Global styles={globalStyle}/>
      <div>
        <MoneyImage money={Money(1)}/>
        <MoneyImage money={Money(5)}/>
        <MoneyImage money={Money(10)}/>
        <MoneyImage money={Money(50)}/>
        <MoneyImage money={Money(100)}/>
        <MoneyImage money={Money(500)}/>
        <MoneyImage money={Money(1000)}/>
        <MoneyImage money={Money(2000)}/>
        <MoneyImage money={Money(5000)}/>
        <MoneyImage money={Money(10000)}/>
      </div>
    </>
  );
};
