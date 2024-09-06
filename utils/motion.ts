export function slideInFromLeft(delay: number) {
    return {
      hidden: { x: -100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
  }
  
  export function slideInFromRight(delay: number) {
    return {
      hidden: { x: 100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
  }
  
  export const slideInFromTop = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  type item = { start: number; end: number };

type SlideCountT = {
  setCurrentIndex: React.Dispatch<React.SetStateAction<item>>;
  count: {
    smCount: number;
    mdCount: number;
    lgCount: number;
  };
};

function slidesCount({ setCurrentIndex, count }: SlideCountT) {
  const { availWidth } = window?.screen || {};

  if (availWidth < 576) {
    setCurrentIndex({ start: 0, end: 1 });
    return;
  }
  if (availWidth < 768) {
    setCurrentIndex({ start: 0, end: count.smCount });
    return;
  }

  if (availWidth < 992) {
    setCurrentIndex({ start: 0, end: count.mdCount });
    return;
  }

  setCurrentIndex({ start: 0, end: count.lgCount });
  return;
}

export { slidesCount };
