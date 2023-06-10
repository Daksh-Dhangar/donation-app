//require('dotenv').config();
const express = require("express");
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
app.use(cors());
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require("stripe")('sk_test_51NFqv2SJHbvGzx6Qe6CyABW7z8DDk09iHGoBoFYS0qgzI26OQ1917xRpyVLlqTANRbVR4vFxeKuzYdEab7BhpGS000ULf48MOj');
//
//app.use(express.static("public"));
app.use(express.json());

app.get('/api/test', (req,res)=>{
  res.json('hello');
})
app.post("/api/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  //console.log(items);
  //console.log('great');
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: items * 100,
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
 
  res.json({
    clientSecret: paymentIntent.client_secret,
  });
});

if(process.env.API_PORT){
  app.listen(process.env.API_PORT, () => console.log("Node server listening on port 4000!"));
}

module.exports = app;

/*
"@testing-library/jest-dom": "^5.16.5",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "autoprefixer": "^10.4.14",
        "postcss": "^8.4.24",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-router-dom": "^6.11.2",
        "react-scripts": "5.0.1",
        
        "tailwindcss": "^3.3.2",
  "dependencies": {
        "@stripe/react-stripe-js": "^1.16.5",
        "@stripe/stripe-js": "^1.0.0",
        
        "dotenv": "^16.1.4",
        "express": "^4.18.2",
        "postcss": "^8.4.24",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-router-dom": "^6.11.2",
        "react-scripts": "5.0.1",
        "stripe": "^12.8.0",
        "tailwindcss": "^3.3.2",
        "web-vitals": "^2.1.4"
    },

    
 */