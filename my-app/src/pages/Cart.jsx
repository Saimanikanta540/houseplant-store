import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem, removeItem } from "../redux/CartSlice";
import './Cart.css';
import Header from "../components/Header";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart?.items || []); // Fixed `cartItems`
    const dispatch = useDispatch();

    return (
        <div>
            {/* <Header cart={cartItems} /> */}
            <h2>Shopping Cart</h2>
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.img} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>${item.price} x {item.quantity}</p>
                        <button onClick={() => dispatch(addItem(item))}>+</button>
                        <button onClick={() => dispatch(removeItem({ id: item.id, quantity: item.quantity }))}>-</button>
                    </div>
                ))
            ) : (
                <p>Your cart is empty</p>
            )}
            <button>Checkout (Coming Soon)</button>
            <button>
                <Link to="/products">Continue Shopping</Link>
            </button>
        </div>
    );
};

export default Cart;
