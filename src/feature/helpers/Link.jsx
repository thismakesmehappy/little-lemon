const Link = ({children, to, target}) => {
    return (<a href={to} target={target} aria-label="On Click">{children}</a>);
}

Link.defaultProps = {
    target: "_self",
}
export default Link;