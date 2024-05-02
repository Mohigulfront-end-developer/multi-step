import Arcade from "../../public/assets/icon-arcade.svg";
import  Game from "../../public/assets/icon-pro.svg";
import GameRed from "../../public/assets/icon-advanced.svg";



const Check = ({ handleActive, monthClick, month }) => {
  return (
    <div className="h-[300px] w-full">
      <div className="">
        <h1 className="font-bold text-[30px] mb-[10px] text-blue-950">
          Select your plan
        </h1>
        <p className="font-normal text-[18px] mb-[25px] text-[grey]">
          You have the option of monthly or yearly billing
        </p>
      </div>
      <div className="flex justify-between mb-[30px]">
        <div className=" p-3 border-[1px]  border-slate-300] rounded-md w-[30%] hover:border-blue-900 ">
          <img src={Arcade} alt="" />
          <h3 className="mt-[50px] text-blue-800 font-bold text-[15px]">
            Arcade
          </h3>
          <p className="text-[grey] text-[15px] font-normal">$9/mo</p>
        </div>{" "}
        <div className="p-3 border-[1px]  border-slate-300 rounded-md w-[30%] hover:border-blue-900">
          <img src={GameRed} alt="" />
          <h3 className="mt-[50px] text-blue-800 font-bold text-[15px]">
            Advanced
          </h3>
          <p className="text-[grey] text-[15px] font-normal">$12/mo</p>
        </div>{" "}
        <div className="p-3 border-[1px]  border-slate-300 rounded-md w-[30%] hover:border-blue-900 ">
          <img src={Game} alt="" />
          <h3 className="mt-[50px] text-blue-800 font-bold text-[15px]">
            Pro
          </h3>
          <p className="text-[grey] text-[15px] font-normal">$15/mo</p>
        </div>
      </div>
      <div className="flex justify-center items-end bg-slate-50 p-3 rounded-xl gap-2 mb-[50px]">
        <h4
          className={`${
            month ? "text-blue-900" : "text-[grey]"
          } font-bold text-[15px]`}
        >
          Monthly
        </h4>
        <span
          onClick={monthClick}
          className="w-[35px] relative h-[20px] bg-blue-900 flex items-center rounded-full"
        >
          <div
            className={`w-[12px] h-[12px] absolute  bg-white rounded-full ${
              month ? "left-[4px]" : "left-[18px]"
            }  `}
          ></div>
        </span>
        <h4
          className={`${
            !month ? "text-blue-900" : "text-[grey]"
          } font-bold text-[15px]`}
        >
          Yearly
        </h4>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => handleActive("1")}
          className="hover:text-blue-900"
        >
          {" "}
          Go Back
        </button>
        <button
          onClick={() => handleActive("3")}
          className="border p-3 rounded-lg items-right bg-blue-900 text-[white] w-[35%]"
        >
          {" "}
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Check;
