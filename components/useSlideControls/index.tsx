"use client";
import { useEffect, useState } from "react";
// import { slidesCount } from "@/utils/helpers";
import { slidesCount } from "@/utils/motion";

type useSlideControlsT = {
  mdCount: number;
  smCount: number;
  lgCount: number;
};

function useSlideControls(count: useSlideControlsT) {
  const [currentIndex, setCurrentIndex] = useState({ start: 0, end: 4 });

  useEffect(() => {
    function handleResize() {
      slidesCount({
        setCurrentIndex,
        count: count,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { currentIndex, setCurrentIndex };
}

export { useSlideControls };
