import { useState } from "react";
import SignupForm from "../forms/SignupForm";
import LoginForm from "../forms/LoginForm";
import { SVG_DATA } from "../../utils/constants";
import SVG from "react-inlinesvg";
import "./Signin.css";

interface SigninProps {
  onSubmit: (e: any) => void;
  onClose?: () => void;
  hideClose?: boolean;
}
const Signin = ({ onSubmit, onClose, hideClose = false }: SigninProps) => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const toggleMode = () => {
    setMode((val) => {
      if (val == "login") return "signup";
      else return "login";
    });
  };
  return (
    <div className="signin-card py-[2.5rem] px-5 bg-[#27292d] relative rounded-[8px] border-2 border-[#969696] w-[max(32%,463px)]  ">
      {hideClose ? (
        <></>
      ) : (
        <button
          className="float-right rounded-full p-3 bg-[#131319] absolute top-4 right-4"
          onClick={() => {
            if (onClose) onClose();
          }}
        >
          <SVG src={SVG_DATA.cross} />
        </button>
      )}
      <div className="signin-header mb-[2.6rem]">
        <p className="font-medium text-[14px] text-[#6B6C70] text-center">
          {" "}
          {mode == "login" ? "WELCOME BACK" : "SIGN UP"}
        </p>
        <p className="font-semibold font-[18px] text-white text-center">
          {mode == "login"
            ? "Log into your account"
            : "Create an account to continue"}
        </p>
      </div>
      {mode == "login" ? (
        <LoginForm onSubmit={onSubmit} />
      ) : (
        <SignupForm onSubmit={onSubmit} />
      )}

      <div className="flex">
        <span className="text-[#7F8084]">
          {" "}
          {mode == "login" ? "Not registered yet" : "Already have an account"}?
        </span>{" "}
        <button className="text-[#C5C7CA] ms-2" onClick={toggleMode}>
          {mode == "login" ? "Register" : "Login"} →
        </button>{" "}
      </div>
    </div>
  );
};

export default Signin;
