import { useEffect, useRef, useState } from 'react';

function useCustomSimpleBar() {
  const [scrollBarMaxHeight, setScrollBarMaxHeight] = useState(0);
  const scrollBarContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleResize() {
      if (!scrollBarContainer?.current) return;

      setScrollBarMaxHeight(scrollBarContainer.current.offsetHeight);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { scrollBarMaxHeight, scrollBarContainer };
}

export { useCustomSimpleBar };
