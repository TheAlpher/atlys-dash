import Signin from "../../Signin";
import "./SigninModal.css";
interface SigninModalProps {
  open: boolean;
  closeModal: () => void;
}
const SignInModal = ({ open = false, closeModal }: SigninModalProps) => {
  return (
    <dialog open={open} className={`signin-modal ${!open ? "hidden" : ""}`}>
      <Signin onSubmit={closeModal} onClose={closeModal} />
    </dialog>
  );
};

export default SignInModal;
