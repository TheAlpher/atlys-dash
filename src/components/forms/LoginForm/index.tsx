import CustomInput from "../../CustomInput";
interface LoginFormProps {
  onSubmit: (e: any) => void;
}
const LoginForm = ({ onSubmit }: LoginFormProps) => {
  return (
    <>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          onSubmit(e);
        }}
      >
        <CustomInput
          label=" Email or Username"
          placeholder="Enter your email or username"
          type="text"
          required={true}
        />
        <CustomInput
          label="Password"
          placeholder="Enter your password"
          type="password"
          required={true}
          secondaryAction={
            <span
              onClick={() => {
                alert("New password link has been sent");
              }}
              className="text-[12px] text-[#C5C7CA] cursor-pointer"
            >
              Forgot password?
            </span>
          }
        />
        {/* <div className="input-container">
          <div className="flex justify-between input-header">
            <span className="input-label">Password</span>
          </div>
          <div className="input-wrapper flex">
            <input
              placeholder="Enter your password"
              className="flex-1"
              type={passType}
              required
            ></input>
            <button onClick={toggleType}>
              <SVG src={SVG_DATA.eye} />
            </button>
          </div>
        </div> */}

        <button
          type="submit"
          className="w-[100%] text-center  text-[16px] font-semibold rounded-[4px] py-3 action-btn  my-4"
        >
          {" "}
          Login now
        </button>
      </form>
    </>
  );
};

export default LoginForm;
