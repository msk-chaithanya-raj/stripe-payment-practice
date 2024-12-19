require("dotenv").config();

const express = require("express");
const app = express();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

app.use(express.json());
app.use(express.static("public"));

const storeItems = new Map([
  [1, { priceInCents: 1000, courseName: "Learn Next.js" }],
  [2, { priceInCents: 3000, courseName: "Learn ReactJS" }],
]);

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: req.body.items.map((item) => {
        const storeItem = storeItems.get(item.id);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.courseName,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      mode: "payment",
      success_url: `${process.env.SERVER_URL}/success.html`,
      cancel_url: `${process.env.SERVER_URL}/cancel.html`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(5000);
