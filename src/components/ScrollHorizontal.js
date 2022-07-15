import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <p onClick={() => scrollPrev()} className="right-arrow">
      <img src="./images/icons/left-arrow.png" alt="right-arrow" />
    </p>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <p onClick={() => scrollNext()} className="left-arrow">
      <img src="./images/icons/right-arrow.png" alt="right-arrow" />
    </p>
  );
};
const ScrollHorizontal = () => {
  return (
    <div className="relative mt-6">
      <ScrollMenu RightArrow={RightArrow} LeftArrow={LeftArrow}>
        <div className="card-exercise">
          <img src="./images/icons/gym.png" alt="icon-gym" className="w-12" />
          <p className="text-2xl">Back</p>
        </div>
        <div className="card-exercise">
          <img src="./images/icons/gym.png" alt="icon-gym" className="w-12" />
          <p className="text-2xl">Back</p>
        </div>
        <div className="card-exercise">
          <img src="./images/icons/gym.png" alt="icon-gym" className="w-12" />
          <p className="text-2xl">Back</p>
        </div>
        <div className="card-exercise">
          <img src="./images/icons/gym.png" alt="icon-gym" className="w-12" />
          <p className="text-2xl">Back</p>
        </div>
        <div className="card-exercise">
          <img src="./images/icons/gym.png" alt="icon-gym" className="w-12" />
          <p className="text-2xl">Back</p>
        </div>
        <div className="card-exercise">
          <img src="./images/icons/gym.png" alt="icon-gym" className="w-12" />
          <p className="text-2xl">Back</p>
        </div>
        <div className="card-exercise">
          <img src="./images/icons/gym.png" alt="icon-gym" className="w-12" />
          <p className="text-2xl">Back</p>
        </div>
      </ScrollMenu>
    </div>
  );
};

export default ScrollHorizontal;
