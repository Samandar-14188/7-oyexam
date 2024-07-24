import fiveProduct from '../../assets/fivebaground.png';
import React, { useState, useEffect } from 'react';
import ProductCart from "../../utils/productCart/index";
import InfoCard from '../../utils/Product/info'; // To'g'ri komponent importi
import PictureCard from '../../utils/Product/image'; // To'g'ri komponent importi

const Earphones = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // APIga so'rov yuborish
    fetch('http://localhost:3000/0')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
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

  const product = data[0] || {}; // `product1` o'rniga `product` ishlatiladi

  return (
    <div>
      <div className='hero-title'>EARPHONES</div>
      <div className='speakers-wrapper earphones-wrapper'>
      <PictureCard img={fiveProduct} />
        <InfoCard title={product.name} paragraf={product.description} />
     
      </div>
      <ProductCart />
    </div>
  );
};

export default Earphones;
