import React from "react";

const Step3 = ({ handleActive }) => {
  return (
    <div>
      <h1 className="font-bold text-[30px] mb-[10px] text-blue-950">
        Pick add-ons
      </h1>
      <p className="font-normal text-[18px] mb-[25px] text-[grey]">
        Add-ons help enhance your gaming experience.
      </p>
      <form action="checkbox">
        <label
          htmlFor=""
          className=" flex gap-3 items-center mb-[15px] p-3 border border-blue-900 rounded-lg"
        >
          <input type="checkbox" id="checkbox" name="checkbox" />
          <div className="">
            <h3 className="font-bold text-[17px] text-blue-950">
              Online service
            </h3>
            <p className="font-normal text-[14px] text-[grey]">
              Access to multiplayer games
            </p>
          </div>
          <span className="ml-[75px] text-blue-800">+1/mo</span>
        </label>
        <label
          htmlFor=""
          className=" flex gap-3 items-center p-3 border mb-[15px] border-blue-900 rounded-lg"
        >
          <input type="checkbox" id="checkbox" name="checkbox" />
          <div className="">
            <h3 className="font-bold text-[17px] text-blue-950">
              Larger storage
            </h3>
            <p className="font-normal text-[14px] text-[grey]">
              Extra 1TB of cloud save
            </p>
          </div>
          <span className="ml-[105px] text-blue-800">+1/mo</span>
        </label>
        <label
          htmlFor=""
          className=" flex gap-3 items-center p-3 border border-blue-900 rounded-lg"
        >
          <input type="checkbox" id="checkbox" name="checkbox" />
          <div className="">
            <h3 className="font-bold text-[17px] text-blue-950">
              Customizable Profil
            </h3>
            <p className="font-normal text-[14px] text-[grey]">
              Custom theme on your profile
            </p>
          </div>
          <span className="ml-[65px] text-blue-800">+1/mo</span>
        </label>
      </form>
      <div className="flex justify-between mt-[60px]">
        <button
          onClick={() => handleActive("2")}
          className="hover:text-blue-900"
        >
          {" "}
          Go Back
        </button>
        <button
          onClick={() => handleActive("4")}
          className="border p-3 rounded-lg items-right bg-blue-900 text-[white] w-[35%]"
        >
          {" "}
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step3;
 