import React from 'react';
import { useNavigate } from 'react-router-dom'; 

export default function Checkout() {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/registrasiyashop'); 
  };

  return (
    <div>
      <button className="Checkout-button" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
}
