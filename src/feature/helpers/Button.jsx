const Button = ({children, to, type, onClickAction}) => {
    let className = "";
    switch (type) {
        case "primary":
            className += "btn btn-primary";
            break;
        case "secondary":
            className += "btn btn-secondary";
            break;
        case "tertiary":
            className += "btn btn-tertiary";
            break;
        case "link":
            className += "btn btn-link";
            break;
        default:
            className += "btn btn-primary";
    }

    if (to) {
        return (
            <a href={to}>
                <button {...(onClickAction && {onClick: onClickAction})}
                        className={className}>{children}</button>
            </a>)
    }

    return <button {...(onClickAction && {onClick: onClickAction})}
                   className={className}>{children}</button>
}

export default Button;

