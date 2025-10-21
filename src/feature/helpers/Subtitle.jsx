const Subtitle = ({children, color, className}) => {
    const colorClass = color ? "text-" + color : "";
    return (<h2 className={`${className} ${colorClass}`}
    >
        {children}</h2>);
}

Subtitle.defaultProps = {
    color: "black",
    className: "",
}

export default Subtitle;