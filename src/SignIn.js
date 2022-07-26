import { useState } from "react";
import SignInForm from "./components/SignInForm";
import SignupForm from "./components/SignupForm";

const SignIn = () => {
  const [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () =>
    setAuthMode((prevMode) => (prevMode === "signin" ? "signup" : "signin"));

  return (
    <div
      className={`flex items-center lg:gap-x-14 lg:items-baseline lg:grid lg:grid-cols-2 lg:w-10/12 justify-center  m-auto mt-10
      `}
    >
      {authMode === "signin" ? (
        <div className="lg:hidden">
          <SignInForm authMode={authMode} changeAuthMode={changeAuthMode} />
        </div>
      ) : (
        <div className="lg:hidden">
          <SignupForm authMode={authMode} changeAuthMode={changeAuthMode} />
        </div>
      )}
      <div className="hidden lg:inline-block">
        <SignInForm authMode={authMode} changeAuthMode={changeAuthMode} />
      </div>
      <div className="hidden lg:inline-block">
        <SignupForm authMode={authMode} changeAuthMode={changeAuthMode} />
      </div>
    </div>
  );
};
export default SignIn;
