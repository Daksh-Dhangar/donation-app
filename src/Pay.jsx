import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./App.css";
import { useEffect, useState } from "react";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.

const stripePromise = loadStripe("pk_test_51NFqv2SJHbvGzx6QVcIFiN0XVWJQffBeMYtAautoBEMXl5gU0j7xMH5dsdKCWHO9njM2SIbD2PrtiBhSxFXkfAuJ00zYaXCQ1e");
//"pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
export default function Pay({amount}) {

  const [clientSecret, setClientSecret] = useState("");
  let dot = 10;
  if(amount)dot = amount;
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    try {
      fetch(`${process.env.REACT_APP_API_URL}/create-payment-intent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: amount }),
      })
        .then((res) => res.json())
        .then(
          (data) => {
          console.log(data);
          setClientSecret(data.clientSecret);
          });
    }
    catch (e) {

    }
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  //className="App"
  return (
    <div >
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm amount={amount*100}/>
        </Elements>
      )}
    </div>
  );
}
