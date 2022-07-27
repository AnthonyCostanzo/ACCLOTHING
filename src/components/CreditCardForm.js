import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../store/cart/cart.selector";
import { selectCurrentUser } from "../store/user/user.selector";
import { useState } from "react";

const CreditCardForm = () => {
  const cartTotal = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const paymentHandler = async (e) => {
    e.preventDefault();
    setIsProcessingPayment(true);
    if (!stripe || !elements) return;
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: cartTotal * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });
    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
    setIsProcessingPayment(false);
  };

  return (
    <div className="m-5 md:w-8/12 md:m-auto pb-20">
      <h2 className="mt-5 text-xl font-bold">Credit Card Payment:</h2>
      <form className="mt-4" onSubmit={paymentHandler}>
        <CardElement />

        <div className="flex justify-end mt-7 ">
          <button
            disabled={isProcessingPayment}
            type="submit"
            className="font-semibold disabled:text-gray-50 disabled:bg-gray-500 transition-all duration-100 border-black border-[2px] w-32 rounded-sm p-2 hover:bg-black hover:text-gray-50"
          >
            PAY NOW
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreditCardForm;
