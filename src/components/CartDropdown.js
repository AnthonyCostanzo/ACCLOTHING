import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../store/cart/cart.selector";

const CartDropdown = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  const goToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="ml-auto mr-5 absolute z-10 min-w-max bg-gray-50 bg-opacity-95 top-8 border-[1.5px] border-black p-3 w-56  text-center">
      <div className="grid gap-5 scroll-smooth  max-h-80 overflow-scroll p-2">
        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <div className="flex gap-5" key={item.id}>
              <div className="h-24 w-20 ">
                <img
                  className="h-full w-full"
                  src={item.imageUrl}
                  alt={item.name}
                />
              </div>
              <div className="font-light">
                <h6 className="min-w-max">{item.name}</h6>
                <span className="inline-block w-full text-left">
                  {item.quantity} X ${item.price}
                </span>
              </div>
            </div>
          ))}
      </div>
      <button
        onClick={goToCheckout}
        className="bg-black mt-[2rem] text-gray-50 h-10 px-5 min-w-max"
      >
        GO TO CHECKOUT
      </button>
    </div>
  );
};
export default CartDropdown;
