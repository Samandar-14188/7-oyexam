import React, { useState, useEffect } from 'react';
import ProductCart from '../../utils/productCart/index'
const Headphones = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // APIga so'rov yuborish
    fetch('http://localhost:3000/3')
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

  return (
    <div>
      
      <ProductCart />
    </div>
  );
};

export default Headphones;
