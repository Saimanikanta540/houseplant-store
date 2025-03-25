import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
    return (
        <div className="landing">
            <h1>Houseplant Haven</h1>
            <p>Your one-stop shop for beautiful indoor plants.</p>
            <Link to="/products">
                <button className="get-started">Get Started</button>
            </Link>
        </div>
    );
};

export default LandingPage;
