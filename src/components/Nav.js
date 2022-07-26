import { AiOutlineShopping } from "react-icons/ai";

import CartDropdown from "./CartDropdown";

import { Link } from "react-router-dom";

import { userActions } from "../store/user/user.reducer";
import { cartActions } from "../store/cart/cart.reducer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { signOutUser } from "../utils/firebase.utils";
import {
  selectCartItems,
  selectCartQuantity,
  SelectIsCartOpen,
} from "../store/cart/cart.selector";
const Nav = () => {
  const { currentUser } = useSelector((state) => state.user);
  const cartItems = useSelector(selectCartItems);
  const cartIsOpen = useSelector(SelectIsCartOpen);
  const cartQuantity = useSelector(selectCartQuantity);

  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await signOutUser();
    dispatch(userActions.setCurrentUser(null));
  };
  const toggleCartDropdown = () => {
    dispatch(cartActions.toggleCartOpen());
  };
  return (
    <>
      <div className="relative">
        <div className="flex p-8 ">
          <div>
            <h3 className="border-2">
              <Link to="/">AC</Link>
            </h3>
          </div>
          <ul className="mr-10 min-w-max flex w-36 relative justify-around ml-auto font-light">
            <li className="cursor-pointer">
              {" "}
              <Link to="/shop">Shop</Link>{" "}
            </li>

            <li className="cursor-pointer">
              {currentUser ? (
                <button onClick={logoutHandler}>Logout</button>
              ) : (
                <Link to="/signin">Sign In</Link>
              )}
            </li>
            <li className="cursor-pointer relative flex h-max w-max ">
              <button onClick={toggleCartDropdown}>
                <AiOutlineShopping
                  className="relative bottom-1 font-light"
                  size={28}
                ></AiOutlineShopping>
              </button>
              <span className="absolute left-6 bottom-5 font-bold text-xs">
                {cartQuantity > 0 && cartQuantity}
              </span>
            </li>
            {cartIsOpen && <CartDropdown />}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Nav;
