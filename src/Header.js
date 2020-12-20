import React from 'react';
import { Link } from "react-router-dom";
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton'
import './Header.css';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }] = useStateValue();
    console.log(basket);
    return (
        <nav className="header">
           
        <div className="header__right">
            <div className="header__icon">
            <IconButton>
                <MenuIcon />
            </IconButton>
            </div>
            <Link to="/">
            <img className="header__logo" src="logo.png" alt="SHUCKS FOOTWEAR"/>
            </Link>
        </div>
        <div className="header__middle">
            <input type="text" className="header__searchInput" placeholder="  Search products..."></input>
            <SearchSharpIcon className="header__searchIcon"/>
        </div>
        <div className="header__left">
            <Link to="/Checkout" className="header__link">
            <ShoppingCartSharpIcon className="basket"/>
            <span className="header__basketCount">{basket?.length}</span>
            </Link>
           
        </div>
       
    </nav>
    )
}

export default Header
