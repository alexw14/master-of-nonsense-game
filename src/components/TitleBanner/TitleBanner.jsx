import { Link } from "react-router-dom";
import "./TitleBanner.css";

const TitleBanner = () => {
  const buttonInfo = {
    path: "/master-of-nonsense/game",
    text: "開始 / Start",
  }
  
  return (
    <div className="title-banner-container">
      <div className="title zh">瞎掰王</div>
      <div className="title en">Master of Nonsense</div>
      <Link to={buttonInfo.path}>
        <button className="start-button">{buttonInfo.text}</button>
      </Link>
    </div>
  );
};

export default TitleBanner;
