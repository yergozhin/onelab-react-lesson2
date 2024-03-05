import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Home() {
    const navigateTo = useNavigate();
    
    const addPage = () => {
        navigateTo("/add");
    }
    const listPage = () => {
        navigateTo("/list");
    }
    const deletePage = () => {
        navigateTo("/delete");
    }
    const updatePage = () => {
        navigateTo("/search");
    }
    return (
        <div className="navigation-menu">
            <button onClick={addPage} className="pgbutton">
                Go to Add page
            </button>
            <button onClick={listPage} className="pgbutton">
                Go to List page
            </button>
            <button onClick={deletePage} className="pgbutton">
                Go to Delete page
            </button>
            <button onClick={updatePage} className="pgbutton">
                Go to Update page
            </button>
        </div>
    );
}