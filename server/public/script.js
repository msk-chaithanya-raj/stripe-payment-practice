const checkoutToPayments = () => {
  fetch("/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [
        { id: 1, quantity: 3 },
        { id: 2, quantity: 1 },
      ],
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((resJson) => Promise.reject(resJson));
    })
    .then(({ url }) => {
      window.location = url;
    })
    .catch((err) => console.error(err));
};
