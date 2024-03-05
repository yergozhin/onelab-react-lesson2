import { Link } from "react-router-dom";
import "./styles.css";

export default function Home() {
    return (
        <nav className="navigation-menu">
            <button className="pgbutton">
            <Link className="pglink" to="/add">
                Go to Add page
            </Link>
            </button>
            <button className="pgbutton">
            <Link className="pglink" to="/list">
                Go to List page
            </Link>
            </button>
            <button className="pgbutton">
            <Link className="pglink" to="/delete">
                Go to Delete page
            </Link>
            </button>
            <button className="pgbutton">
            <Link className="pglink" to="/search">
                Go to Update page
            </Link>
            </button>
        </nav>
    );
}