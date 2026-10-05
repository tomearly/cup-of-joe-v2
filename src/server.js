import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

// Middleware to parse JSON payloads sent by e-commerce platforms
app.use(express.json());

// Webhook endpoint to listen for orders
app.post('/webhook/orders', (req, res) => {

    console.log(req.body)
    const orderData = req.body;

    console.log('☕ New Coffee Order Received!');
    console.log(JSON.stringify(orderData, null, 2));

    // Always respond quickly with a 200 OK status to acknowledge receipt
    res.status(200).send('Webhook received successfully');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Coffee shop server is listening on port ${PORT}`);
});