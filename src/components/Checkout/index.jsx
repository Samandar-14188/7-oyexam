// src/components/Checkout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cartSlice';

const Checkout = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/registrasiyashop'); // Navigate to checkout page
    } else {
      alert('Maxsulotni qo`shing!!!');
    }
  };

  return (
    <div>
      <button className="Checkout-button" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
