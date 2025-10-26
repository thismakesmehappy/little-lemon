import {colorClass} from "./helperMethods.js";

const Highlight = ({children, color}) => {
    return (
        <p className={`highlight ${colorClass(color)}`}>
            {children}
        </p>
    )
}

export default Highlight;