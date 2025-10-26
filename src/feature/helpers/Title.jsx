import {colorClass} from "./helperMethods.js";

const Title = ({children, color, className = ""}) => {
    return (
        <h1 className={`${className} ${colorClass(color)}`}>
            {children}
        </h1>
    );
};

export default Title;
