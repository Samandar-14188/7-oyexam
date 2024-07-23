import Audiophile from "./audiophileIMG";
import Information from "./information";
import AudiophilePNG from "../../assets/AudiophilePNG.png"
export default function AudiophilePage() {
  return (
    <div className="HomeInformation-container">
      <Information />
      <Audiophile img={AudiophilePNG} />
    </div>
  );
}
