import React, { useState } from "react";
import { Link } from "react-router-dom";
import { usePostRegisterMutation } from "../../redux/features/auth/authApiSlice";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

function SignupForm({ setErrors }) {
  const domain = import.meta.env.VITE_HOME_DOMAIN;

  const [isChecked, setIsChecked] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [postRegister] = usePostRegisterMutation();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const registerHandler = (e) => {
    e.preventDefault();
    if (!isChecked) setErrors("Please agree to the terms and conditions");
    if (password !== confirmPassword) setErrors("Passwords do not match");
    const role = "student";
    postRegister({ email, password, role })
      .unwrap()
      .then((res) => {
        const studentInfo = jwtDecode(res.token);
        const redirect = `http://${role}${domain}`;
        Cookies.set("studentInfo", JSON.stringify(studentInfo), {
          domain: `${domain}`,
        });
        Cookies.set("studentToken", res.token, { domain: `${domain}` });
        window.location.replace(redirect);
        setErrors(null);
      })
      .catch((error) => {
        setErrors(error?.data?.error);
        console.log(error);
      });
  };
  return (
    <form className="flex flex-col gap-6" onSubmit={(e) => registerHandler(e)}>
      <p>Create student account</p>
      <input
        type="email"
        required
        placeholder="Email Address"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-4 font-bold"
      />
      <input
        type="password"
        required
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-4 font-bold"
      />
      <input
        type="password"
        required
        name="password"
        placeholder="Retype Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-4 font-bold"
      />

      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          className="checkbox"
          required
          name="agreement"
          checked={isChecked}
          onChange={() => handleCheckboxChange()}
        />
        <p className="text-black">
          I agree to OFFERLETTER
          <span className="">
            {" "}
            <Link
              to="#"
              target="_blank"
              className="text-base font-bold text-[#0D2C58]"
            >
              User Agreement{" "}
            </Link>
          </span>
          and
          <span>
            {" "}
            <Link
              to="#"
              target="_blank"
              className="text-base font-bold text-[#0D2C58]"
            >
              Privacy Policy
            </Link>
          </span>
        </p>
      </div>

      <button className="bg-[#0D2C58] text-white py-4 font-semibold text-base md:text-xl rounded-lg">
        Signup
      </button>
    </form>
  );
}

export default SignupForm;
