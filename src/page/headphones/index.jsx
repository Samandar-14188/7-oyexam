import React, { useState, useEffect } from 'react';
import ProductCart from '../../utils/productCart/index';
import PictureCart from '../../utils/Product/image';
import InfoCart from '../../utils/Product/info';
import OneImage from '../../assets/rasm1.png';
import TwoImage from '../../assets/rasm2.png';
import ThreeImage from '../../assets/rasm4.png';

const Headphones = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]); // data1 holatini qo'shish
  const [data2, setData2] = useState([]); // data1 holatini qo'shish
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

  useEffect(() => {
    // APIga so'rov yuborish
    fetch('http://localhost:3000/2')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data1) => {
        // Ma'lumotni array qilib olish
        setData1(Array.isArray(data1) ? data1 : [data1]);
        setLoading(false); // Yuklash jarayonini to'xtatish
      })
      .catch((error) => {
        setError(error); // Xatoni saqlash
        setLoading(false); // Yuklash jarayonini to'xtatish
      });
  }, []); // Bo'sh array, shuning uchun faqat bir marta render qilinganda ishlaydi
  useEffect(() => {
    // APIga so'rov yuborish
    fetch('http://localhost:3000/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data2) => {
        // Ma'lumotni array qilib olish
        setData2(Array.isArray(data2) ? data2 : [data2]);
        setLoading(false); // Yuklash jarayonini to'xtatish
      })
      .catch((error) => {
        setError(error); // Xatoni saqlash
        setLoading(false); // Yuklash jarayonini to'xtatish
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const product = data[0] || {}; // data[0] bo'sh bo'lsa, bo'sh obyektni foydalanish
  const product1 = data1[0] || {}; // data1[0] bo'sh bo'lsa, bo'sh obyektni foydalanish
  const product2 = data2[0] || {}; // data1[0] bo'sh bo'lsa, bo'sh obyektni foydalanish

  return (
    <div>
      <div className='hero-title'>HEADPHONES</div>
      <div className='Headphones-wrapper'>
        <PictureCart img={OneImage} />
        <InfoCart text='NEW PRODUCT' title={product.name} paragraf={product.description} />
      </div>
      <div className='Headphones-wrapper'>
        <InfoCart title={product1.name} paragraf={product1.description} />
        <PictureCart img={TwoImage} />
      </div>
      <div className='Headphones-wrapper'>
        <PictureCart img={ThreeImage} />
        <InfoCart title={product2.name} paragraf={product2.description} />
      </div>
      <ProductCart />
    </div>
  );
};

export default Headphones;
