import React, { useMemo } from "react";
import { Money } from "../models/Money";
import { css } from "emotion";
import { useHover } from "../hooks/useHover";

export type Props = {
  money: Money;
};

const moneyToImageSourceUrl = (money: Money) =>
  `/img/money_${money.amount}.png`;

export const MoneyImage: React.FunctionComponent<Props> = ({ money }) => {
  const src = useMemo(() => moneyToImageSourceUrl(money), [money]);
  const { isHover, props } = useHover();
  const className = useMemo(
    () =>
      css({
        height: "4rem",
        transition: "transform 30ms ease",
        transform: isHover ? "scale(1.1)" : ""
      }),
    [isHover]
  );

  return (
    <img src={src} alt={`${money.amount}`} className={className} {...props} />
  );
};
