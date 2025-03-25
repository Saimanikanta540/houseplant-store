import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import './Cart.css'
const Cart = () => {
    const cartItems = useSelector((state) => state.cart?.cartItems || []); // Ensure cartItems is always an array
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <div key={item.id}>
                        <img src={item.img} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <button onClick={() => dispatch(addToCart(item))}>+</button>
                        <button onClick={() => dispatch(removeFromCart(item.id))}>-</button>
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
