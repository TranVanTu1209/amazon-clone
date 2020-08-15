import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShopIcon from '@material-ui/icons/Shop';
import { useStateValue } from '../context/StateProvider';
import { auth } from '../firebase';

const Navbar = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const onSubmitHandler = e => {
    e.preventDefault();
  }
  const signout = () => {
    auth.signOut();
    dispatch({
      type: 'LOGOUT'
    });
  }
  return (
    <header className="header">
      <Link to="/" className="header__logo" >amazon</Link>
      <form onSubmit={onSubmitHandler} className="header__form" >
        <input type="text" placeholder="Search some item..." className="header__searchInput" />
        <button type="submit" className="header__searchButton" > <SearchIcon /> </button>
      </form>
      <ul className="navbar">
        <li>
          <Link to={!user ? '/login' : '/'} >
            <div className="header__option">
              <span>Hello  {user && user.email.split('@')[0]} </span>
              {
                user ? <span onClick={signout} >Sign Out</span> : <span>Sign In</span>
              }
            </div>
          </Link>
        </li>
        <li>
          <Link to="/orders" >
            <div className="header__option">
              <span>Returns</span>
              <span>& Orders </span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/" >
            <div className="header__option">
              <span>Your</span>
              <span>Prime</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/checkout" >
            <ShopIcon /> <span className="card__numberItems"> {basket.length} </span>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Navbar;
