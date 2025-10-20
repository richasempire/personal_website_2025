import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../animations/your-animation.json'; // Replace with your Lottie file path

const LottieAnimation = () => {
  return (
    <div className="lottie-container">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

export default LottieAnimation;
