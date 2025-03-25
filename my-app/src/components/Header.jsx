import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const totalItems = useSelector((state) => state.cart.totalItems);

    return (
        <nav>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart ({totalItems})</Link>
        </nav>
    );
};

export default Header;
