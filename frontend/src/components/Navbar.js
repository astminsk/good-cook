import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = ({click}) => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h2>Кулинарные рецепты</h2>
            </div>

            <ul className="navbar__links">
                <li>
                    <Link to="/" className="recipes__link">
                        Рецепты
                    </Link>
                </li>
                <li>
                    <Link to="/contacts" className="contacts__link">
                        Контакты
                    </Link>
                </li>
            </ul>

            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
