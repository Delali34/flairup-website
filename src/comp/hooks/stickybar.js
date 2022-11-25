import { useState, useEffect } from "react";

const useStickybar = () => {
  const [stickyBar, setStickbar] = useState(0);
  useEffect(() => {
    const updatePosition = () => {
      setStickbar(window.pageXOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  return stickyBar;
};

export default useStickybar;
