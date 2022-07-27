import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CreditCardForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 1000 }),
    }).then((res) => res.json());
    console.log(response);
  };

  return (
    <div className="m-5 md:w-8/12 md:m-auto pb-20">
      <h2 className="mt-5 text-xl font-bold">Credit Card Payment:</h2>
      <form className="mt-4" onSubmit={paymentHandler}>
        <CardElement />

        <div className="flex justify-end mt-7 ">
          <button
            type="submit"
            className="font-semibold transition-all duration-100 border-black border-[2px] w-32 rounded-sm p-2 hover:bg-black hover:text-gray-50"
          >
            PAY NOW
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreditCardForm;
