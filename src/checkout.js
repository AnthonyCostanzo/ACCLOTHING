import { useSelector } from "react-redux";
import CheckoutCard from "./components/CheckoutCard";
import CreditCardForm from "./components/CreditCardForm";
import { selectCartItems, selectCartTotal } from "./store/cart/cart.selector";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <>
      {" "}
      {Object.keys(cartItems).length > 0 ? (
        <>
          <table className="w-[95vw] m-auto md:w-11/12 md:m-auto">
            <thead>
              <tr className="mt-5 justify-around border-b-gray-600 border-b-[1.5px] pb-2">
                <th>Product</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody className="">
              {cartItems.map((item) => (
                <CheckoutCard key={item.id} cartItem={item} />
              ))}
              <tr className="flex mt-5 md:ml-3">
                <td>
                  <h2 className="text-xl">
                    Total: <span className="font-semibold">${cartTotal} </span>
                  </h2>
                </td>
              </tr>
            </tbody>
          </table>
          <CreditCardForm />
        </>
      ) : (
        <h1 className="mt-5 text-center text-2xl">No Items In Cart</h1>
      )}
    </>
  );
};
export default Checkout;
