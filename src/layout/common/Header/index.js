import './index.scss';
import { Logo } from '../../../assets';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
const Header = () => {
    return (
        <div className="Header">
            <div className="div-logo">
                <Link to="/">
                    <span>Pizzeria</span>
                    <img className="logo" alt="Logo" src={Logo} />
                </Link>
            </div>
            <div className="links">
                <Link to="/order-pizza">Order Pizza</Link>
                <Link to="/build-ur-pizza">Build Ur Pizza</Link>
            </div>
            <div className="interrupt" />
            <div className="div-cart-button">
                <Link to="/show-cart">
                    <Button className="secondary-full" value="Shopping Cart" />
                </Link>
            </div>
        </div>
    );
}

export default Header;
