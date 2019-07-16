import React, { useMemo } from "react";
import { Money } from "../domains/models/Money";
import { css } from "emotion";
import { useHover } from "../hooks/useHover";

export type Props = {
  money: Money;
  onClick: () => any;
  isActive: boolean;
};

const moneyToImageSourceUrl = (money: Money) =>
  `/img/money_${money.amount}.png`;

export const MoneyImage: React.FunctionComponent<Props> = ({
  money,
  onClick,
  isActive
}) => {
  const src = useMemo(() => moneyToImageSourceUrl(money), [money]);
  const { isHover, props } = useHover();
  const className = useMemo(
    () =>
      css({
        height: "4rem",
        transition: "transform 200ms ease",
        transform: isHover ? "scale(1.1)" : "",
        opacity: isActive ? 0.5 : 1
      }),
    [isHover, isActive]
  );

  return (
    <img
      src={src}
      alt={`${money.amount}`}
      className={className}
      {...props}
      onClick={onClick}
    />
  );
};
