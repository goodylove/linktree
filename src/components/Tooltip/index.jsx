import "./Tooltip.css";

const Tooltip = ({ title, subText }) => {
    return ((title || subText) && <div className="Tooltip">
        {title ? <p className="title">{title}</p> : null}
        {subText && <p className="subText">{subText}</p>}
    </div>)
}

export default Tooltip;