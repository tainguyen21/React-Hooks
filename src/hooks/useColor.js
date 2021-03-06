import { useEffect, useRef, useState } from "react";

function randomColor(currentColor) {
  const COLOR_LIST = ["red", "green", "blue"];
  const currentIndex = COLOR_LIST.indexOf(currentColor);
  let randomIndex = Math.trunc(Math.random() * 3);
  while (currentIndex === randomIndex) {
    randomIndex = Math.trunc(Math.random() * 3);
  }

  return COLOR_LIST[randomIndex];
}

function useColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = randomColor(colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return color;
}

export default useColor;
