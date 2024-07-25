import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiMinus, FiPlus } from "react-icons/fi";
import { incrementQuantity, decrementQuantity } from "../../redux/productSlice"; // Import actions
import { selectCartItems } from "../../redux/cartSlice"; // Import selectors

const ButtonCounter = ({ productId, price }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems); // Get cart items from Redux store
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const item = cartItems.find((item) => item.id === productId);
    if (item) {
      setQuantity(item.quantity);
    } else {
      setQuantity(0); // If product is not in cart, set quantity to 0
    }
  }, [cartItems, productId]);

  const handleIncrease = () => {
    dispatch(incrementQuantity(productId)); // Increase quantity in product slice
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) { // Prevent quantity from going below 0
      dispatch(decrementQuantity(productId)); // Decrease quantity in product slice
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  // Calculate total price

  return (
    <div className="btnCoun">
      <FiMinus className="icons" onClick={handleDecrease} />
      <span>{quantity}</span>
      <FiPlus className="icons" onClick={handleIncrease} />
    </div>
  );
};

export default ButtonCounter;
