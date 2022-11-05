import React from "react";
import Lottie from "react-lottie";

const LottieTemp = ({
  height,
  width,
  loopMode,
  autoplayMode,
  animationData,
}) => {
  const defaultOptions = {
    loop: loopMode,
    autoplay: autoplayMode,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
};

export default LottieTemp;
