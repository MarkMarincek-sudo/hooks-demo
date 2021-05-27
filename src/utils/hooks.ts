import { useEffect, useMemo, useState } from 'react';

function useBackgroundColor(animate: boolean) {
  const [colorValues, setColorValues] = useState<[number, number, number]>([0, 0, 0]);

  useEffect(() => {
    if (!animate) return;

    const interval = setInterval(() => {
      setColorValues((values) => {
        const [r, g, b] = values;
        return [(r + 10) % 256, (g + 20) % 256, (b + 30) % 256];
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [animate]);

  const backgroundColor = useMemo(
    () => `rgba(${colorValues[0]},${colorValues[1]},${colorValues[2]}, 0.4)`,
    [colorValues]
  );

  return backgroundColor;
}

function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
}

export { useBackgroundColor, useWidth };
