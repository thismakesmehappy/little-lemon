const Title = ({children, color, className = ""}) => {
    const colorClass = color ? "text-" + color : "";
    return (
        <h1 className={`${className} ${colorClass}`}>
            {children}
        </h1>
    );
};

export default Title;
