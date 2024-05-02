import React from 'react'
import Click from "../../public/assets/icon-thank-you.svg"

const Thanks = ({ handleActive }) => {
  return (
    <div className='flex justify-center items-center flex-col h-full text-center w-[300px]'>
      <img src={Click} alt="" />
      <h1 className="font-bold text-[30px] mb-[10px] text-blue-950">
        Thank You!
      </h1>
      <p className="font-normal text-[18px] mb-[25px] text-[grey]">
        Thank for coming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default Thanks