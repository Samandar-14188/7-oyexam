
import Button from '../../components/Button/index'

const Information = ({
  title,
  paragraf,
  text
}) => {
  return (
    <div className="InformationCard-container">
      <span>{text}</span>
      <h1>{title}</h1>
      <p>{paragraf}</p>
      <Button text="See Product"  />
    </div>
  );
};

export default Information;