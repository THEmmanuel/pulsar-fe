import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom for routing
import axios from 'axios';  // Import axios for making API calls
import style from './HistoryPage.module.css';
import HistoryCard from '../../components/HistoryCard/HistoryCard';

const HistoryPage = () => {
  const [orders, setOrders] = useState([]);  // State to hold the fetched orders
  const API_URL = process.env.REACT_APP_API_URL; // Ensure this environment variable is set correctly

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${API_URL}/orders`); // Make API call to fetch orders
        setOrders(response.data.orders); // Set the fetched orders to state
      } catch (error) {
        console.error('Error fetching orders:', error); // Handle errors in fetching orders
      }
    };

    fetchOrders();
  }, [API_URL]);  // Only run the effect once, when the component mounts

  return (
    <div>
      <h1>History</h1>
      
      {/* Map through the orders and display HistoryCard for each */}
      <div className={style.HistoryCardsWrapper}>
        {orders.length > 0 ? (
          orders.map(order => (
            <Link to={`/transaction-page/${order._id}`} key={order._id}> {/* Link to individual transaction page */}
              <HistoryCard 
			  key={order._id} 
			  order={order} />
            </Link>
          ))
        ) : (
          <p>No orders found.</p>  // Display message when there are no orders
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
