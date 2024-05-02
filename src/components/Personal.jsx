import { useState } from "react";
import Validation from "./Validation.js";

const Personal = ({ handleActive }) => {
  const [errors, setErrors] = useState({});
  const handleValidation = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInput = (event) => {
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);
  };

  return (
    <div className="form" onSubmit={handleValidation}>
      <h1 className="font-bold text-[30px] mb-[10px] text-blue-950">
        Personal info
      </h1>
      <p className="font-normal text-[18px] mb-[25px] text-[grey]">
        Please provide your name, email adress, adn phone number.
      </p>
      <div className=" flex flex-col gap-2">
        <label htmlFor="" className="text-[14px] text-blue-950">
          Name
        </label>
        <input
          type="text"
          className="w-full p-4 border rounded-lg mb-[15px]  outline-0"
          placeholder=" Your name...."
          onChange={handleInput}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <label htmlFor="" className="text-[14px] text-blue-950">
          Email Adress
        </label>
        <input
          type="text"
          className="w-full p-4 border rounded-lg mb-[15px]  outline-0"
          placeholder="Email..."
          onChange={handleInput}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <label htmlFor="" className="text-[14px] text-blue-950">
          Phone Number
        </label>
        <input
          type="number"
          className="w-full p-4 border rounded-lg mb-[35px] outline-0"
          placeholder="e.g +99 899 123-45-67"
          onChange={handleInput}
        />
        {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
      </div>
      <div className="flex justify-end">
        <button
          className="border p-3 rounded-lg items-right bg-blue-900 text-[white] w-[35%]"
          onClick={() => handleActive("2")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Personal;
