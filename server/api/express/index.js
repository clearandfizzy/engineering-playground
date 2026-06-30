import express from "express";
import orderResolver from "./services/order.js";

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  res.json({ message: "Hello, Engineering Playground!" });
});

app.get('/api/orders/:id', (req, res) => {
  const orderId = req.params.id;
  const include = req.query.include ? req.query.include.split(',') : [];

  const mockOrder = {
    id: orderId,
    status: "shipped",
    total: 89.99,
  };

  const includedData = include.reduce((acc, key) => {
    const resolver = orderResolver[key.trim()];
    if (!resolver) {
      return acc;
    }

    return { ...acc, ...resolver() };
  }, {});

  return res.json({
    ...mockOrder,
    ...includedData,
  });
})



app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});