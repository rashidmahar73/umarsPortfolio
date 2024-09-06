import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type item = { start: number; end: number };

type ContentT = {
  children: React.ReactNode;
};

type SliderT = {
  slideCount: number;
  currentIndex: item;
  setCurrentIndex: React.Dispatch<React.SetStateAction<item>>;
  children?: React.ReactNode;
};

function Slider({
  children,
  slideCount = 0,
  currentIndex,
  setCurrentIndex,
}: SliderT) {
  function showNextSlide() {
    setCurrentIndex({
      start: currentIndex.start + 1,
      end: currentIndex.end + 1,
    });
  }

  function showPrevSlide() {
    if (currentIndex.start === 0) return;
    setCurrentIndex({
      start: currentIndex.start - 1,
      end: currentIndex.end - 1,
    });
  }

  return (
    <div className="flex items-center justify-center">
      <div className="mx-4">
        <button
          className={` relative z-10  ${
            currentIndex.start === 0
              ? "bg-gray-50/10 bg-opacity-10 cursor-default"
              : "cursor-pointer hover:bg-gray-200/30 bg-gray-100/20 backdrop-blur-sm"
          } text-white flex justify-center rounded-full items-center w-[30px] h-[30px]`}
          onClick={showPrevSlide}
          disabled={currentIndex.start === 0}
        >
          <FaArrowLeft />
        </button>
      </div>
      <div>{children}</div>
      <div className="mx-4">
        <button
          className={`flex items-center relative z-10 justify-center rounded-full p-2 transition-colors text-white ${
            slideCount === currentIndex.end
              ? "bg-gray-50/10 bg-opacity-10 cursor-default"
              : "cursor-pointer hover:bg-gray-200/30 bg-gray-100/20 backdrop-blur-sm"
          } items-center w-[30px] h-[30px]`}
          onClick={showNextSlide}
          disabled={slideCount === currentIndex.end}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

function Content({ children }: ContentT) {
  return <div>{children}</div>;
}

Slider.Content = Content;

export { Slider };
