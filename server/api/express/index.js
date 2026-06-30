import express from "express";
import OrderEndpoint from '28-jun-26-order-endpoint/endpoint.js';

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
	res.json({message: "Hello, Engineering Playground!"});
});

app.get('/api/orders/:id', (req, res) => {
	return OrderEndpoint(req, res);
})

app.listen(3000, () => {
	console.log("Server running on http://localhost:3000");
});