import { GoChevronRight } from "react-icons/go";

export default function Cards({ logo, title }) {
  return (
    <div className="cards-container">
      <img src={logo} alt="rasm" />
      <div className="card">
        <h2>{title}</h2>
        <span>
          shop <GoChevronRight className="iconCard" />
        </span>
      </div>
    </div>
  );
}