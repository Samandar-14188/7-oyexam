import fiveProduct from '../../assets/fivebaground.png';
import React, { useState, useEffect } from 'react';
import ProductCart from "../../utils/productCart/index";
import InfoCard from '../../utils/Product/info'; 
import PictureCard from '../../utils/Product/image';

const Earphones = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/0')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(Array.isArray(data) ? data : [data]);
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
  return (
    <div>
      <div className='hero-title'>EARPHONES</div>
      <div className='speakers-wrapper earphones-wrapper'>
      <PictureCard img={fiveProduct} />
        <InfoCard title={product.name} paragraf={product.description}  productId={product.id}/>
     
      </div>
      <ProductCart />
    </div>
  );
};

export default Earphones;
