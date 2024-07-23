import ImageAudiophile from "../../assets/Bitmap.png";
import Audiophile from "./audiophileIMG";
import Information from "./information";
export default function HomeInformation() {
  return (
    <div className="HomeInformation-container">
      <Information />
      <Audiophile img={ImageAudiophile} />
    </div>
  );
}
