import {
  signInWithGooglePopup,
  signInUserwithEmailAndPassword,
} from "../utils/firebase.utils";
import { useState } from "react";

const SignInForm = ({ authMode, changeAuthMode }) => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formFields;

    try {
      await signInUserwithEmailAndPassword(email, password);
      setFormFields({
        email: "",
        password: "",
      });
    } catch (e) {
      alert(e.code);
    }
  };
  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };
  return (
    <form className={`grid gap-7`} onSubmit={onFormSubmit}>
      <h2 className="font-semibold text-[1.4rem]">
        I already have an account{" "}
        <small className="block font-light text-[.8rem]">
          Sign in with your email and password
        </small>
      </h2>

      <input
        onChange={handleInputChange}
        className="border-b-[1px] lg:w-10/12  border-black p-2"
        type="email"
        name="email"
        placeholder="email"
        required
      />
      <input
        onChange={handleInputChange}
        className="border-b-[1px]  lg:w-10/12 border-black p-2"
        type="password"
        name="password"
        required
        placeholder="password
        "
      />
      <div className="flex gap-x-3">
        <button
          type="submit"
          className="bg-black text-sm font-semibold hover:border-[1px] hover:border-black hover:bg-gray-50 hover:text-black transition-all duration-200 text-gray-50 p-3 rounded-sm cursor-pointer w-32"
        >
          SIGN IN
        </button>
        <button
          type="button"
          onClick={logGoogleUser}
          className="bg-blue-500 text-sm font-semibold hover:bg-blue-600 p-4 rounded-sm cursor-pointer text-gray-50 min-w-max "
        >
          SIGN IN WITH GOOGLE
        </button>
      </div>
      <button
        type="button"
        onClick={changeAuthMode}
        className="bg-green-500 lg:hidden text-sm font-semibold hover:bg-green-600 p-4 rounded-sm cursor-pointer text-gray-50 min-w-max "
      >
        {authMode === "signin" ? "SIGN UP" : "SIGN IN"}
      </button>
    </form>
  );
};
export default SignInForm;
