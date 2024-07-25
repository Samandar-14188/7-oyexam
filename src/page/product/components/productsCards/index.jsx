import Button from '../../../../components/Button/index'
export default function ProductsCards({ img, title, id }) {
  return (
    <div className="ProductCards">
      <div className="imageCard">
        <img src={img} alt="rasm" />
      </div>
      <h3>{title}</h3>
      <Button text="See Products" id={id} />
    </div>
  );
}