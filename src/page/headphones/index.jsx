import React, { useState, useEffect } from 'react';
import ProductCart from '../../utils/productCart/index';
import PictureCart from '../../utils/Product/image';
import InfoCart from '../../utils/Product/info';
import OneImage from '../../assets/rasm1.png';
import TwoImage from '../../assets/rasm2.png';
import ThreeImage from '../../assets/rasm4.png';

const Headphones = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/3')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(Array.isArray(data) ? data : [data]);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/2')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data1 => {
        setData1(Array.isArray(data1) ? data1 : [data1]);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data2 => {
        setData2(Array.isArray(data2) ? data2 : [data2]);
        setLoading(false);
      })
      .catch(error => {
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
  const product2 = data2[0] || {};

  return (
    <div>
      <div className='hero-title'>HEADPHONES</div>
      <div className='Headphones-wrapper'>
        <PictureCart img={OneImage} />
        <InfoCart text='NEW PRODUCT' title={product.name} paragraf={product.description} productId={product.id}  />
      </div>
      <div className='Headphones-wrapper'>
        <InfoCart title={product1.name} paragraf={product1.description}  productId={product1.id} />
        <PictureCart img={TwoImage} />
      </div>
      <div className='Headphones-wrapper'>
        <PictureCart img={ThreeImage} />
        <InfoCart title={product2.name} paragraf={product2.description}  productId={product2.id} />
      </div>
      <ProductCart />
    </div>
  );
};

export default Headphones;
