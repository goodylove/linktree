const LinkButton = ({ children, id,  href, tooltipTitle, tooltipSubtext }) => {
    return <button id={id}>
    <a href={href}>{children}</a>
  </button>
}

export default LinkButton;