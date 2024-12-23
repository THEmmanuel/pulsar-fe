import axios from 'axios';
import React from 'react';

const createOrder = async () => {
  const orderData = {
    adType: 'buy', // Example value
    token: 'BTC', // Example value
    tokenAmount: '0.05', // Example value
    fiatAmount: '2000', // Example value
    buyerUsername: 'buyer123', // Example value
    sellerUsername: 'seller456', // Example value
    buyerAddress: '0xBuyerAddress12345', // Example value
    sellerAddress: '0xSellerAddress67890', // Example value
    timestamp: new Date().toISOString(), // Current timestamp
    tradeExpiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Expire in 24 hours
    status: 'pending', // Initial status
    orderTradePaymentMethod: 'bank_transfer', // Example value
    orderTradeAdID: 'ad12345' // Example value
  };

  try {
    const response = await axios.post('http://localhost:3000/api/orders', orderData);
    console.log('Order Created:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error.response?.data || error.message);
    throw error;
  }
};

export default createOrder;

/* user is first asked if they are sure when they click on the bank transfer trade method card */

/* when they click on yes, this function is called with the neccesary deatils amd the user is automatically navigated here to complete the flow. */