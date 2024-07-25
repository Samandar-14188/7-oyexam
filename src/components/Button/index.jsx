import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Button({ text, productId }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/product/${productId}`);
    console.log(' salom', productId);
  };

  return (
    <button onClick={handleButtonClick}>{text}</button>
  );
}
