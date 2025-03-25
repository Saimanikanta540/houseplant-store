import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import plants from "../data/plants";
import './Products.css'
const Products = () => {
    const dispatch = useDispatch();

    return (
        <div className="products">
            {plants.map((plant) => (
                <div key={plant.id} className="plant">
                    <img src={plant.img} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>${plant.price}</p>
                    <button onClick={() => dispatch(addToCart(plant))}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default Products;
