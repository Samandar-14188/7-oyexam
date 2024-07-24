import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import Onebaground from "../../assets/onebaground.png";
import Twobaground from "../../assets/twobaground.png";
import Threebaground from "../../assets/fivebaground.png";
import ProductCart from "../../utils/productCart/index";
const CartShop = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // APIga so'rov yuborish
    fetch("http://localhost:3000/3")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Ma'lumotni array qilib olish
        setData(Array.isArray(data) ? data : [data]);
        setLoading(false); // Yuklash jarayonini to'xtatish
      })
      .catch((error) => {
        setError(error); // Xatoni saqlash
        setLoading(false); // Yuklash jarayonini to'xtatish
      });
  }, []); // Bo'sh array, shuning uchun faqat bir marta render qilinganda ishlaydi

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="hero">
        <div className="heroInfo">
          <span>NEW PRODUCT </span>

          {data.map((item) => (
            <h1 key={item.id}>{item.name.toUpperCase()}</h1>
          ))}

          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button text="See Product" />
        </div>
        <div className="Home-picture">
          <img src={Onebaground} alt="rasm" />
        </div>
      </div>
      <ProductCart />
      <div className="ZX9SPEAKER-Main">
        <div className="Home-picture">
          <img src={Twobaground} alt="rasm" />
        </div>
        <div className="ZX9SPEAKERInfo">
          {data.map((item) => (
            <h1 key={item.id}>{item.name.toUpperCase()}</h1>
          ))}

          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button text="See Product" />
        </div>
      </div>
      <div className="YX1EARPHONES-container">
        <div className="ZX9SPEAKERTwoInfo">
          {data.map((item) => (
            <h1 key={item.id}>{item.name.toUpperCase()}</h1>
          ))}

          <Button text="See Product" />
        </div>
      
      </div>
      <div className="YX1EARPHONES-container1">
      <div className="YX1EARPHONESImage">
        <img src={Threebaground} alt="rasm" />
      </div>
        <div className="ZX9SPEAKERTwoInfo1 ZX9SPEAKERTwoInfo">
          {data.map((item) => (
            <h1 key={item.id}>{item.name.toUpperCase()}</h1>
          ))}

          <Button text="See Product" />
        </div>
      
      </div>
    </div>
  );
};

export default CartShop;
