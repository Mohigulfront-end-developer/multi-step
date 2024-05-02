import React from "react";

const Sitebar = ({ active }) => {
  return (
    <div className="sitebar">
      <div className="flex flex-col w-[300px]  h-full p-[20px] items-left gap-4  ">
        <div className="flex gap-4 items-center">
          <span
            style={{ backgroundColor: active == "1" ? "#33E0FF" : "" }}
            className={`w-[30px] h-[30px] rounded-full flex justify-center items-center border  ${
              active == "1" ? "text-[black]" : "text-[white]"
            }  `}
          >
            1
          </span>
          <div className="">
            <h2 className="text-[grey]">Step 1</h2>
            <p className="text-[white]">YOUR INFO</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <span
            style={{ backgroundColor: active == "2" ? "#33E0FF" : "" }}
            className={`w-[30px] h-[30px] rounded-full flex justify-center items-center border  ${
              active == "2" ? "text-[black]" : "text-[white]"
            }  `}
          >
            2
          </span>
          <div className="">
            <h2 className="text-[grey]">Step 2</h2>
            <p className="text-[white]">SELECT PLAN</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <span
            style={{ backgroundColor: active == "3" ? "#33E0FF" : "" }}
            className={`w-[30px] h-[30px] rounded-full flex justify-center items-center border  ${
              active == "3" ? "text-[black]" : "text-[white]"
            }  `}
          >
            3
          </span>
          <div className="">
            <h2 className="text-[grey]">Step 3</h2>
            <p className="text-[white]">ADD-ONS</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <span
            style={{ backgroundColor: active == "4" ? "#33E0FF" : "" }}
            className={`w-[30px] h-[30px] rounded-full flex justify-center items-center border  ${
              active == "4" ? "text-[black]" : "text-[white]"
            }  `}
          >
            4
          </span>
          <div className="">
            <h2 className="text-[grey]">Step 4</h2>
            <p className="text-[white]">SUMMARY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitebar;
