import React, { useState } from "react";
import { usePostLoginMutation } from "../../redux/features/auth/authApiSlice";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";
import InputPassword from "./InputPassword";

function LoginForm({ setErrors }) {
  const domain = import.meta.env.VITE_HOME_DOMAIN;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [postLogin] = usePostLoginMutation();

  const loginHandler = (e) => {
    e.preventDefault();
    postLogin({ email, password })
      .unwrap()
      .then((res) => {
        const userInfo = jwtDecode(res.token);
        const role = userInfo.role;
        const redirect = `http://${role}${domain}`;
        const user = role === "student" ? "student" : "user";
        Cookies.set(`${user}Info`, JSON.stringify(userInfo), {
          domain: `${domain}`,
        });
        Cookies.set(`${user}Token`, res.token, { domain: `${domain}` });
        window.location.replace(redirect);
        setErrors(null);
        console.log(JSON.stringify(userInfo));
      })
      .catch((error) => {
        setErrors(error.data?.error);
        console.log(error);
      });
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={(e) => loginHandler(e)}>
      <input
        type="email"
        required
        placeholder="Email Address"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-4 font-bold"
      />
      <InputPassword
        setPassword={setPassword}
        password={password}
        placeholder={"Password"}
      />

      <Link className="text-sm font-medium text-black" to="/reset-password">
        Forget Password?
      </Link>
      <button className="bg-[#0D2C58] text-white py-4 font-semibold text-base md:text-xl rounded-lg">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
