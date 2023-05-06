import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
function InputPassword({
  password,
  setPassword,
  setConfirmPassword,
  placeholder,
}) {
  const [inputType, setInputType] = useState("password"); // [password, text
  function handleShowPassword() {
    setInputType(inputType === "password" ? "text" : "password");
  }

  return (
    <div className="relative flex items-center">
      <input
        type={inputType}
        required
        name="password"
        placeholder={placeholder}
        value={password}
        onChange={(e) =>
          setPassword
            ? setPassword(e.target.value)
            : setConfirmPassword(e.target.value)
        }
        className="w-full text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-4 font-bold"
      />
      <button
        className="absolute text-sm font-medium text-black right-4"
        type="button"
        onClick={handleShowPassword}
      >
        {inputType === "password" ? <FaEye /> : <FaEyeSlash />}
      </button>
    </div>
  );
}

export default InputPassword;
