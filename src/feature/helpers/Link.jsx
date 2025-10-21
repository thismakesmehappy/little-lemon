const Link = ({children, to, target}) => {
    return (<a href={to} target={target}>{children}</a>);
}

Link.defaultProps = {
    target: "_self",
}
export default Link;