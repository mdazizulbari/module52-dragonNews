import React from "react";
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playImg from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 p-3 rounded-2xl">
      <h2 className="font-bold mb-5 text-center">Qzone</h2>
      <div className="flex items-center flex-col gap-5">
        <img src={swimmingImg} alt=""/>
        <img src={classImg} alt="" />
        <img src={playImg} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
