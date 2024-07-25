import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

export default function Checkout() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleCheckout = () => {
    navigate('/registrasiyashop'); // Navigate to the specified URL
  };

  return (
    <div>
      <button className="Checkout-button" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
}
