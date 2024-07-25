// src/components/SimpleDialogDemo.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineShoppingCart } from "react-icons/md";
import Dialog from "@mui/material/Dialog";
import ButtonCounter from "../ButtonCounter";
import { selectCartItems, removeAll } from "../../redux/cartSlice";
import TengPicture from "../../assets/rasm1.png";
import Checkout from '../ButtonCheckout/index'

const SimpleDialogDemo = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveAll = () => {
    dispatch(removeAll());
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <MdOutlineShoppingCart
        className="shoppingIcon"
        onClick={handleClickOpen}
      />
      <Dialog open={open} onClose={handleClose}>
        <div className="Dialog-main">
          <span>CART</span>
          <p className="Remove" onClick={handleRemoveAll}>Remove all</p>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="dialog-card">
                <div className="dialogCard-img">
                  <img src={TengPicture} alt={item.title} />
                  <div className="Dialog-info">
                    <h6>{item.title}</h6>
                    <p>${item.price.toFixed(2)}</p>
                    <ButtonCounter productId={item.id} price={item.price} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
          <div className="total-wraper">
            <p className="total">TOTAL</p>
            <span className="price-dialog">${totalPrice.toFixed(2)}</span>
          </div>
          <Checkout />
        </div>
      </Dialog>
    </div>
  );
};

export default SimpleDialogDemo;
