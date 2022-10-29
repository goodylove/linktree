import Tooltip from "./Tooltip.jsx";

const LinkButton = ({ children, id, href, tooltipTitle, tooltipSubtext }) => {
  return (<>
    <button id={id}>
      <a href={href}>{children}</a>
    </button>

    <Tooltip title={tooltipTitle} subText={tooltipSubtext} />
  </>
  )
}

export default LinkButton;