import React, { useState } from "react";
import Sitebar from "./Sitebar";
import Personal from "./Personal";
import Check from "./Check";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Thanks from "./Thanks";

const Register = () => {
  const [active, setActive] = useState("1");
  const [month, setMonth] = useState(true);

  console.log(active);

  const handleActive = (type) => {
    setActive(type);
  };

  const monthClick = () => {
    setMonth(!month);
  };
  console.log(month,'month');

  return (
    <div className="flex gap-5">
      <Sitebar active={active} />
     
      <div className="p-[50px]">
        {active == "1" && <Personal handleActive={handleActive} />}
        {active == "2" && <Check handleActive={handleActive} month={month} monthClick={monthClick} />}
        {active == "3" && <Step3 handleActive={handleActive} />}
        {active == "4" && <Step4 handleActive={handleActive} />}
        {active == "5" && <Thanks handleActive={handleActive} />}



      </div>
    </div>
  );
};

export default Register;
