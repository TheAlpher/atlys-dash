import { useNavigate } from "react-router-dom";
import Signin from "../components/Signin";
import { SVG_DATA } from "../utils/constants";
import SVG from "react-inlinesvg";

const Login = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/home");
  };
  return (
    <div className="login-page flex justify-center items-center flex-col w-[100vw] h-[100vh] bg-transparent">
      <SVG src={SVG_DATA.login} className="mb-[2.75rem] mx-auto" />
      <Signin onSubmit={onSubmit} hideClose={true} />
    </div>
  );
};

export default Login;
