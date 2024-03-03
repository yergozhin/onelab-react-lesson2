import { Link } from "react-router-dom";
import "./styles.css";

export default function Home() {
    return (
        <nav className="navigation-menu">
            <Link to="/add">
                Go to Add page
            </Link>
            <Link to="/list">
                Go to List page
            </Link>
            <Link to="/delete">
                Go to Delete page
            </Link>
            <Link to="/search">
                Go to Update page
            </Link>
        </nav>
    );
}