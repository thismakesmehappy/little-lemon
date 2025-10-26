import {colorClass} from "./helperMethods.js";

const Display = ({children, color}) => {
    return (
        <p className={`display ${colorClass(color)}`}>
            {children}
        </p>
    )
}

export default Display;