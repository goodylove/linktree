import Tooltip from "../Tooltip";
import "./LinkButton.css";

const LinkButton = ({ children, id, href, tooltipTitle, tooltipSubText }) => {
 return (
    <div className="LinkButton">
      <button id={id}>
        <a href={href}>{children}</a>
      </button>

      <Tooltip title={tooltipTitle} subText={tooltipSubText} />
    </div>
  );
};

export default LinkButton;
