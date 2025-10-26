import {colorClass} from "./helperMethods.js";

const Subtitle = ({children, color, className}) => {
    return (<h2 className={`${className} ${colorClass(color)}`}
    >
        {children}</h2>);
}

Subtitle.defaultProps = {
    color: "black",
    className: "",
}

export default Subtitle;