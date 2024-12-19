# Stripe Payment Practice

This project demonstrates a basic integration of Stripe Payments using Node.js and Express. It allows users to purchase courses with predefined prices in INR (Indian Rupees) and supports Stripe's checkout flow.

## Features

- Handles payments in INR using Stripe Checkout.
- Predefined courses with their prices.
- Local development setup with a simple Express server.

---

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd stripe-payment-practice
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add the following environment variables:

   ```env
   STRIPE_PRIVATE_KEY=sk_test_tR3PYbcVNZZ796tH88S4VQ2u
   SERVER_URL=http://localhost:5000
   ```

4. Ensure that the `public` directory contains the `success.html` and `cancel.html` files for displaying success and cancellation messages after a payment.

---

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:5000` to access the application.

---

## Stripe Payment Testing

- **Valid Test Card Details**: Any valid card details except the card number `4242424242424242`. This card number will always simulate a failed transaction.
- Other card details like expiration date, CVV, and postal code can be random values, but they must conform to Stripe's testing guidelines.

---

## Code Structure

- **server.js**: The main server file handling routes and Stripe integration.
- **public/**: Contains static files (e.g., success and cancel pages).

---

## Routes

### POST `/create-checkout-session`

Handles the creation of Stripe Checkout sessions.

**Request Body Example:**

```json
{
  "items": [
    { "id": 1, "quantity": 3 },
    { "id": 2, "quantity": 1 }
  ]
}
```

**Response Example:**

```json
{
  "url": "https://checkout.stripe.com/pay/cs_test_12345"
}
```
