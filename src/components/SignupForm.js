import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserFromAuth,
  signInWithGooglePopup,
} from "../utils/firebase.utils";

const SignupForm = ({ changeAuthMode, authMode }) => {
  const [formFields, setFormFields] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };
  const { displayName, email, password, confirmPassword } = formFields;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const onFormSubmit = async (event) => {
    event.preventDefault();
    const { email, password, displayName, confirmPassword } = formFields;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserFromAuth(user, { displayName });
      setFormFields({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      alert("Welcome " + displayName);
    } catch (e) {
      alert(e.code);
    }
  };
  return (
    <form className={`grid gap-7`} onSubmit={onFormSubmit}>
      <h2 className="font-semibold text-[1.4rem]">
        I don't have an account{" "}
        <small className="block font-light text-[.8rem]">
          Sign up with your email and password
        </small>
      </h2>

      <input
        onChange={handleInputChange}
        className="border-b-[1px] lg:w-10/12  border-black p-2"
        type="text"
        name="displayName"
        placeholder="name"
        value={displayName}
      />
      <input
        onChange={handleInputChange}
        className="border-b-[1px] lg:w-10/12  border-black p-2"
        type="email"
        name="email"
        placeholder="email"
        value={email}
      />

      <input
        onChange={handleInputChange}
        className="border-b-[1px] lg:w-10/12 border-black p-2"
        type="password"
        name="password"
        placeholder="password"
        value={password}
      />
      <input
        onChange={handleInputChange}
        className="border-b-[1px] lg:w-10/12 border-black p-2"
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        placeholder="confirm password"
      />
      <div className="flex gap-x-3">
        <button
          type="submit"
          className="bg-black text-sm font-semibold hover:border-[1px] hover:border-black hover:bg-gray-50 hover:text-black transition-all duration-200 text-gray-50 p-3 rounded-sm cursor-pointer w-32"
        >
          SIGN UP
        </button>
        <button
          onClick={logGoogleUser}
          type="button"
          className="bg-blue-500 text-sm font-semibold hover:bg-blue-600 p-4 rounded-sm cursor-pointer text-gray-50 min-w-max "
        >
          SIGN UP WITH GOOGLE
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

export default SignupForm;
