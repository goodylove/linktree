import { useState } from "react";
import Tooltip from "../Tooltip";
import "./LinkButton.css";

const LinkButton = ({ children, id, href, tooltipTitle, tooltipSubText }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleShowTooltip = () => {
    setShowTooltip(true);
  };

  const handleHideTooltip = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="LinkButton"
      onMouseOver={handleShowTooltip}
      onMouseLeave={handleHideTooltip}
    >
      <button id={id}>
        <a href={href}>{children}</a>
      </button>

      <Tooltip
        title={tooltipTitle}
        subText={tooltipSubText}
        isShow={showTooltip}
      />
    </div>
  );
};

export default LinkButton;
