import Nav from "./components/Nav";
import Checkout from "./checkout";
import { Routes, Route } from "react-router-dom";
import {
  onAuthStateChangedListener,
  createUserFromAuth,
} from "./utils/firebase.utils";
import Home from "./Home";
import SignIn from "./SignIn";
import Shop from "./shop";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "./store/user/user.reducer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserFromAuth(user);
      }
      dispatch(userActions.setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="min-h-max pb-10">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
