const Subtitle = ({children, color, className}) => {
    const colorClass = color ? "text-" + color : "";
    return (<h3 className={`${className} ${colorClass}`}
    >
        {children}</h3>);
}

Subtitle.defaultProps = {
    color: "black",
    className: "",
}

export default Subtitle;