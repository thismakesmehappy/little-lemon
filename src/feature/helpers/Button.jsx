const Button = ({children, to, type, onClickAction, className}) => {
    let buttonClassName = className ? className : "";
    switch (type) {
        case "primary":
            buttonClassName += " btn btn-primary";
            break;
        case "secondary":
            buttonClassName += " btn btn-secondary";
            break;
        case "tertiary":
            buttonClassName += " btn btn-tertiary";
            break;
        case "link":
            buttonClassName += " btn btn-link";
            break;
        default:
            buttonClassName += " btn btn-primary";
    }

    if (to) {
        return (
            <a href={to}>
                <button {...(onClickAction && {onClick: onClickAction})}
                        className={buttonClassName}>{children}</button>
            </a>)
    }

    return <button {...(onClickAction && {onClick: onClickAction})}
                   className={buttonClassName}>{children}</button>
}

export default Button;

