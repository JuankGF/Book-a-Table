import { useEffect, useState } from "react";

type Size = {
  width: number | undefined;
  height: number | undefined;
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return {
    windowSize,
    isSmallScreen: windowSize.width! <= 820,
    isMobile: windowSize.width! <= 480,
  };
};

export { useWindowSize };
