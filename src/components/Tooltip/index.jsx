import "./Tooltip.css";

const Tooltip = ({ title, subText, isShow }) => {
    return ((title || subText) && <div className={`Tooltip ${isShow ? 'show' : ''}`}>
        {title ? <p className="title">{title}</p> : null}
        {subText && <p className="subText">{subText}</p>}
    </div>)
}

export default Tooltip;