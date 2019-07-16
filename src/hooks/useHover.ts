import { useCallback, useState } from "react";

export const useHover = () => {
  const [isHover, setIsHover] = useState(false);
  const setTrue = useCallback(() => void setIsHover(true), []);
  const setFalse = useCallback(() => void setIsHover(false), []);

  return {
    isHover,
    props: {
      onMouseOver: setTrue,
      onMouseLeave: setFalse
    }
  };
};
