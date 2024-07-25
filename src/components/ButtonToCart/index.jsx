import React from 'react';


const ButtonToCart = ({ text, product, onClick }) => {


  return (
    <button onClick={onClick}>{text}</button>
  );
};

export default ButtonToCart;
