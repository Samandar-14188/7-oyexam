import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import ProductsCards from './components/productsCards';
import ProductsCard from '../../utils/productCart/index';
import OneCard from '../../assets/rasm1.png';
import Eigth from '../../assets/rasm4.png';
import Earphonesimg1 from '../../assets/firtimage.png';
import Earphonesimg2 from '../../assets/thirdimage.png';
import Earphonesimg3 from '../../assets/Bitmap.png';
import NinePicture from '../../assets/twobaground.png';
import BagroundCards from './components/bagroundcards';
import ProductInfo from './components/productinfo';
import ProductsMain from './components/productsmain';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch(); 

  useEffect(() => {
    fetch(`http://localhost:3000/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mainProducts-container">
      <Link to="/" className="Back"> 
        Go Back
      </Link>
      <ProductsMain
        text='NEW PRODUCT'
        title={product.name}
        paragraf={product.description}
        price={product.price}
        onClick={handleAddToCart} 
      />
      <ProductInfo
        paragraf1={product.features}
        text1="Earphone Unit"
        text2="Multi-size Earplugs"
        text3="User Manual"
        text4="USB-C Charging Cable"
        text5="Travel Pouch"
        number1="2x"
        number2="6x"
        number3="1x"
        number4="1x"
        number5="1x"
      />
      <BagroundCards
        img1={Earphonesimg1}
        img2={Earphonesimg2}
        img3={Earphonesimg3}
      />
      <div className="CardsProducts">
        <h1>you may also like</h1>
        <div className="Products-wrapper">
          <ProductsCards title="XX99 MARK I" id="3" img={OneCard} />
          <ProductsCards title="XX59" img={Eigth} id="2" />
          <ProductsCards title="ZX7 SPEAKER" img={NinePicture} id="5" />
        </div>
      </div>
      <ProductsCard />
    </div>
  );
};

export default Product;
