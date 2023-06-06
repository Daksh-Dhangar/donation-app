const express = require("express");
const app = express();
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require("stripe")('sk_test_51NFqv2SJHbvGzx6Qe6CyABW7z8DDk09iHGoBoFYS0qgzI26OQ1917xRpyVLlqTANRbVR4vFxeKuzYdEab7BhpGS000ULf48MOj');
//
app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return items;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items*100),
    currency: "usd",
    description: 'Donation',
    shipping: {
    name: 'Daksh Dhangar',
    address: {
      line1: '510 Townsend St',
      postal_code: '98140',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    }
  },
    automatic_payment_methods: {
      enabled: true,
    }
  });
  //console.log(paymentIntent.invoice);
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));