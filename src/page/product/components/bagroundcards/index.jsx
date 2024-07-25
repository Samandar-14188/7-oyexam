export default function BagroundCards({ img1, img2, img3 }) {
  return (
    <div className="CardsProduct-wrapper">
      <div className="CardsProduct-oneWrapper">
        <div className="Bg-Cards">
          <img src={img1} alt="" />
        </div>
        <div className="Bg-Cards">
          <img src={img2} alt="" />
        </div>
      </div>
      <div className="CardsProduct-twoWrapper">
        <div className="Bg-CardsTwo">
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
}