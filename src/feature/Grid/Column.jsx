const Column = ({children, size}) => {
    return <div className={`col ${size && "col-" + size}`}>{children}</div>;

}

export default Column;