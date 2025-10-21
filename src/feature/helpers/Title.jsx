const Title = ({children, color = "black", className = ""}) => {
    const colorClass = "text-" + color;
    return (
        <h1 className={`${className} ${colorClass}`}>
            {children}
        </h1>
    );
};

export default Title;
