import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type ContentT = {
  children: React.ReactNode;
};

function CardSlider({ children, cards, setCards }: any) {
  function showNextSlide() {
    const updatedCards = [...cards];
    const firstCard = updatedCards.shift();
    updatedCards.push(firstCard);
    setCards(updatedCards);
  }

  function showPrevSlide() {
    const updatedCards = [...cards];
    const lastCard = updatedCards.pop();
    updatedCards.unshift(lastCard);
    setCards(updatedCards);
  }

  const [availWidth, setAvailWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { availWidth } = window.screen || {};
      setAvailWidth(availWidth);
    }
  }, []);


  return (
    <>
      {availWidth <= 476 && (
        <div className="flex flex-col items-center justify-center">
          <div>{children}</div>
          <div className="flex mt-4">
            <div className="mx-4">
              <button
                className={` relative z-10 cursor-pointer hover:bg-gray-200/30 bg-gray-100/20 backdrop-blur-sm text-white flex justify-center rounded-full items-center w-[30px] h-[30px]`}
                onClick={showPrevSlide}
              >
                <FaArrowLeft />
              </button>
            </div>
            <div className="mx-4">
              <button
                className={`flex items-center bg-gray-100/20 backdrop-blur-sm cursor-pointer relative z-10 justify-center rounded-full p-2 transition-colors text-white items-center w-[30px] h-[30px]`}
                onClick={showNextSlide}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
      {availWidth > 476 && (
        <div className="flex items-center justify-center">
          <div className="mx-4">
            <button
              className={` relative z-10 cursor-pointer hover:bg-gray-200/30 bg-gray-100/20 backdrop-blur-sm text-white flex justify-center rounded-full items-center w-[30px] h-[30px]`}
              onClick={showPrevSlide}
            >
              <FaArrowLeft />
            </button>
          </div>
          <div>{children}</div>
          <div className="mx-4">
            <button
              className={`flex items-center bg-gray-100/20 backdrop-blur-sm cursor-pointer relative z-10 justify-center rounded-full p-2 transition-colors text-white items-center w-[30px] h-[30px]`}
              onClick={showNextSlide}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Content({ children }: ContentT) {
  return <div>{children}</div>;
}

CardSlider.Content = Content;

export { CardSlider };
