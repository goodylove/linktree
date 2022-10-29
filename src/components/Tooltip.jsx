const Tooltip = ({ title, subText }) => {
    return <div className="tooltip-subtext">
        {title ? <p className="title">{title}</p> : null}
        {subText && <p className="subText">{subText}</p>}
    </div>
}

export default Tooltip;