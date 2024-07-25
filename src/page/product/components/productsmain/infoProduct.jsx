import React from "react";
import ButtonCounter from "../../../../components/ButtonCounter";
import ButtonToCart from "../../../../components/ButtonToCart/index";

const InformationProduct = ({
  title,
  paragraf,
  text,
  price,
  productId,
  onClick,
}) => {
  return (
    <div className="InformationCard-container">
      <span>{text}</span>
      <h1>{title}</h1>
      <p>{paragraf}</p>
      <h2>${price}</h2>
      <div className="btn-wrapper">
        <ButtonCounter productId={productId} price={price} />
        <ButtonToCart text="ADD TO CART" onClick={onClick} />
      </div>
    </div>
  );
};

export default InformationProduct;
