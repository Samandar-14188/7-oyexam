import React, { FC } from "react";


const ProductInfo = ({
  paragraf1,
  number1,
  number2,
  number3,
  number4,
  number5,
  text1,
  text2,
  text3,
  text4,
  text5,
}) => {
  return (
    <div className="ProductInfo-container">
      <div className="FEATURES">
        <h1>FEATURES</h1>
        <p>{paragraf1}</p>
      </div>
      <div className="table">
        <h1>in the box</h1>
        <ul>
          {number1 && (
            <li>
              <span>{number1}</span>
              {text1}
            </li>
          )}
          {number2 && (
            <li>
              <span>{number2}</span>
              {text2}
            </li>
          )}
          {number3 && (
            <li>
              <span>{number3}</span>
              {text3}
            </li>
          )}
          {number4 && (
            <li>
              <span>{number4}</span>
              {text4}
            </li>
          )}
          {number5 && (
            <li>
              <span>{number5}</span>
              {text5}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;