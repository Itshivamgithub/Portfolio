import React from "react";
import Tilt from "react-parallax-tilt";

const BallCanvas = ({ icon }) => {
  return (
    <Tilt
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.1}
      transitionSpeed={450}
      className='w-28 h-28 flex justify-center items-center'
    >
      <div className='w-24 h-24 rounded-full bg-[#fff8eb] flex justify-center items-center shadow-card border-2 border-[#915EFF] p-4'>
        <img
          src={icon}
          alt='tech-icon'
          className='w-16 h-16 object-contain'
        />
      </div>
    </Tilt>
  );
};

export default BallCanvas;
