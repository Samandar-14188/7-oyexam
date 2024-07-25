import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiMinus, FiPlus } from "react-icons/fi";
import { incrementQuantity, decrementQuantity } from "../../redux/productSlice";
import { selectCartItems } from "../../redux/cartSlice"; 

const ButtonCounter = ({ productId, price }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const item = cartItems.find((item) => item.id === productId);
    if (item) {
      setQuantity(item.quantity);
    } else {
      setQuantity(0); 
    }
  }, [cartItems, productId]);

  const handleIncrease = () => {
    dispatch(incrementQuantity(productId)); 
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) 
      dispatch(decrementQuantity(productId)); 
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };


  return (
    <div className="btnCoun">
      <FiMinus className="icons" onClick={handleDecrease} />
      <span>{quantity}</span>
      <FiPlus className="icons" onClick={handleIncrease} />
    </div>
  );
};

export default ButtonCounter;
