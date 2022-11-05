import React from "react";
import LottieTemp from "./LottieTemp";
import animationData from "../assets/lotties/animation.json"
const LottieDemo = () => {
  return (
    <div>
      <LottieTemp
        animationData={animationData}
        height={300}
        width={300}
        autoplayMode={true}
        loopMode={true}
      />
      <div style={{fontSize:"0.5rem",color:"gray"}}>( I need a break )</div>
      <div>Add motion to your websites using Lottie</div>
    </div>
  );
};

export default LottieDemo;
