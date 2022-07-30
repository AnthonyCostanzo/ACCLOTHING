import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart/cart.reducer";

const CheckoutCard = ({ cartItem }) => {
  const dispatch = useDispatch();

  const incrementQuantity = () => {
    dispatch(cartActions.addCartItem(cartItem));
  };
  const decrementQuantity = () => {
    dispatch(cartActions.removeCartItem(cartItem));
  };

  const clearCartItem = () => {
    dispatch(cartActions.clearCartItem(cartItem));
  };

  return (
    <tr className="text-center">
      {cartItem.quantity > 0 && (
        <>
          <td className="h-32 flex justify-center my-5">
            <img
              className="h-full md:w-8/12 rounded-sm shadow-md shadow-gray-500"
              alt="yeezy"
              src={cartItem.imageUrl}
            />
          </td>
          <td className="min-w-max">{cartItem.name}</td>
          <td className="">
            <button
              onClick={decrementQuantity}
              className="font-bold mr-2 text-xl cursor-pointer"
            >
              {" "}
              {"<"}{" "}
            </button>
            {cartItem.quantity}
            <button
              onClick={incrementQuantity}
              className="font-bold ml-2 text-xl cursor-pointer"
            >
              {" "}
              {">"}{" "}
            </button>
          </td>
          <td className="">${cartItem.price}</td>
          <td
            onClick={clearCartItem}
            className="cursor-pointer hover:text-red-500 text-xl"
          >
            X
          </td>
        </>
      )}
    </tr>
  );
};

export default CheckoutCard;
