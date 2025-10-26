import {colorClass} from "./helperMethods.js";

const Subtitle = ({children, color, className}) => {
    return (<h3 className={`${className} ${colorClass(color)}`}
    >
        {children}</h3>);
}

Subtitle.defaultProps = {
    color: "black",
    className: "",
}

export default Subtitle;