// Backend API Example for Cashfree Integration
// This should be implemented on your server (Node.js/Express example)

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Use sandbox credentials for testing
const CASHFREE_APP_ID = process.env.CASHFREE_APP_ID || 'your_sandbox_app_id_here';
const CASHFREE_SECRET_KEY = process.env.CASHFREE_SECRET_KEY || 'your_sandbox_secret_key_here';

// Use sandbox endpoint for development/testing
const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://api.cashfree.com/pg'
  : 'https://sandbox.cashfree.com/pg';

app.post('/api/create-order', async (req, res) => {
  try {
    const { amount, currency, customerDetails, orderId, orderNote } = req.body;
    const orderData = {
      order_id: orderId,
      order_amount: amount,
      order_currency: currency,
      order_note: orderNote,
      customer_details: {
        customer_id: `customer_${Date.now()}`,
        customer_name: `${customerDetails.firstName} ${customerDetails.lastName}`,
        customer_email: customerDetails.email,
        customer_phone: customerDetails.phone
      },
      order_meta: {
        return_url: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/payment-success?order_id={order_id}`
      }
    };

    const response = await axios.post(
      `${BASE_URL}/orders`,
      orderData,
      {
        headers: {
          'x-client-id': CASHFREE_APP_ID,
          'x-client-secret': CASHFREE_SECRET_KEY,
          'x-api-version': '2023-08-01',
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.data.payment_session_id) {
      res.json({
        success: true,
        orderToken: response.data.payment_session_id,
        orderId: orderId,
        message: 'Order created successfully'
      });
    } else {
      throw new Error('Failed to create order');
    }
  } catch (error) {
    console.error('Error creating order:', error?.response?.data || error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to create order'
    });
  }
});

const PORT = process.env.PORT || 4028;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 