import React, { useState } from 'react'
import Thanks from './Thanks';

const Step4 = ({ handleActive }) => {
  const [step5, setStep5] = useState(false)
  return (
    <div>
      {step5?
      
      <div className="">
        <h1 className="font-bold text-[30px] mb-[10px] text-blue-950">
          Finishing Up
        </h1>
        <p className="font-normal text-[18px] mb-[25px] text-[grey]">
          Double-check everything looks OK before confirming.
        </p>
        <div className="bg-slate-50 p-3">
          <div className="flex justify-between items-center border-b-[#dedada] mb-[20px]">
            <div className="">
              <h3 className="font-bold text-[17px] text-blue-950">
                Arcade Monthly
              </h3>
              <p className="underline font-normal text-[15px] text-blue-600">
                Change
              </p>
            </div>
            <span className="font-bold text-blue-900">$9/mo</span>
          </div>
          <div className="flex justify-between items-center mb-[10px]">
            <div className="">
              <p className=" font-normal text-[15px] text-[grey]">
                Online Service
              </p>
            </div>
            <span className="font-normal text-blue-900 text-[15px]">
              +$1/mo
            </span>
          </div>
          <div className="flex justify-between items-center mb-[20px]">
            <div className="">
              <p className="font-normal text-[15px] text-[grey]">
                Large Storage
              </p>
            </div>
            <span className="font-normal text-blue-900 text-[15px]">
              +$2/mo
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-[30px] mb-[80px]">
          <p className="text-[grey] text-[15px] font-normal">
            Total (per month)
          </p>
          <span className="font-bold text-blue-900 text-[18px]">+$12/mo</span>
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => handleActive("3")}
            className="hover:text-blue-900"
          >
            {" "}
            Go Back
          </button>
          <button
            onClick={() => handleActive("5")}
            className="border p-3 rounded-lg items-right bg-blue-900 text-[white] w-[35%]"
          >
            {" "}
            Confirm
          </button>
        </div>
      </div>:<Thanks/>}
    </div>
  );
};

export default Step4