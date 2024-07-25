import InformationProduct from './infoProduct'
import PictureCards from "../../../../utils/Product/image";
import Image  from '../../../../assets/rasm1.png'


const ProductsMain = ({
  paragraf,
  title,
  text,
  price,
  onClick,
  productId,
}) => {
  return (
    <div className="ProductsMain-wrapper">
      <PictureCards img={Image} />
      <InformationProduct
        paragraf={paragraf}
       title={title}
         text={text}
         price={price}
         onClick={onClick}
         productId={productId}
       /> 
    </div>
  );
};

export default ProductsMain;