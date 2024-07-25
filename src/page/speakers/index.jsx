import React, { useState, useEffect } from 'react';
import ProductCart from '../../utils/productCart/index';
import PictureCart from '../../utils/Product/image';
import InfoCart from '../../utils/Product/info';
import TwoImage from '../../assets/twobaground.png';
import ProductImage from '../../assets/rasm3.png';

const Speakers = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // APIga so'rov yuborish
    fetch('http://localhost:3000/5')
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
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/4')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data1) => {
        setData1(Array.isArray(data1) ? data1 : [data1]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const product = data[0] || {};
  const product1 = data1[0] || {};

  return (
    <div>
      <div className='hero-title'>SPEAKERS</div>
      <div className='speakers-wrapper'>
        <PictureCart img={TwoImage} />
        <InfoCart text='NEW PRODUCT' title={product.name} paragraf={product.description}  productId={product.id} />
      </div>
      <div className='speakers-wrapper'>
        <InfoCart title={product1.name} paragraf={product1.description}  productId={product1.id} />
        <PictureCart img={ProductImage} />
      </div>
      <ProductCart />
    </div>
  );
};

export default Speakers;
