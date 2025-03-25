import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
    return (
        <div className="landing">
            <h1>Green Haven</h1>
            <p>Your one-stop shop for beautiful indoor plants.</p>

            <h2>About Green Haven</h2>
            <p>
                At <strong>Green Haven</strong>, we bring nature into your home with a carefully curated selection of lush, vibrant houseplants. 
                Our mission is to enhance your living spaces with greenery that purifies the air and uplifts your mood. 
                With a wide variety of plants, from easy-care succulents to exotic tropicals, we ensure quality and freshness in every purchase. 
                Whether you're a seasoned plant parent or just starting, <strong>Green Haven</strong> is here to help you grow your indoor jungle!
            </p>

            <Link to="/products">
                <button className="get-started">Get Started</button>
            </Link>
        </div>
    );
};

export default LandingPage;
