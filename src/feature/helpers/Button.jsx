const Button = ({children, to, type, onClickAction, className, role}) => {
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

    const optionalProps = {...(onClickAction && {onClick: onClickAction}), ...role && {role: role}}

    if (to) {
        return (
            <a href={to}>
                <button {...optionalProps}
                        className={buttonClassName}>{children}</button>
            </a>)
    }

    return <button {...(onClickAction && {onClick: onClickAction})}
                   className={buttonClassName}>{children}</button>
}

export default Button;

