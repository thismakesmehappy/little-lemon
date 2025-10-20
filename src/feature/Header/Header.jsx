import Nav from "../Nav/Nav.jsx";
import logo from "../../assets/little_lemon_logo.jpg";

const Header = () => {
    return (
        <header>
            <img src={logo} alt={"Little Lemon logo"} />
            <Nav />
        </header>
    );
};

export default Header
