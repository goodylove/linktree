import Tooltip from "./Tooltip.jsx";

const LinkButton = ({ children, id, href, tooltipTitle, tooltipSubText }) => {
  return (
    <>
      <button id={id}>
        <a href={href}>{children}</a>
      </button>

      <Tooltip title={tooltipTitle} subText={tooltipSubText} />
    </>
  );
};

export default LinkButton;
