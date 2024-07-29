import CustomInput from "../../CustomInput";
interface SignupFormProps {
  onSubmit: (e: any) => void;
}
const SignupForm = ({ onSubmit }: SignupFormProps) => {
  return (
    <>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const myData: Record<string, any> = {};
          for (const [key, value] of formData.entries()) {
            myData[key] = value;
            if (key == "username") {
              localStorage.setItem("username", myData["username"]);
            }
          }
          onSubmit(myData);
        }}
      >
        <CustomInput
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          required={true}
        />{" "}
        <CustomInput
          label="Username"
          type="text"
          name="username"
          placeholder="Choose a preferred username"
          required={true}
        />{" "}
        <CustomInput
          label="Password"
          name="password"
          type="password"
          placeholder="Choose a strong password"
          required={true}
          secondaryAction={
            <span className="text-[12px] text-[#C5C7CA] cursor-pointer">
              Forgot password?
            </span>
          }
        />
        <button
          type="submit"
          className="w-[100%] text-center  text-[16px] font-semibold rounded-[4px] py-3  action-btn my-4"
        >
          {" "}
          Continue
        </button>
      </form>
    </>
  );
};

export default SignupForm;
