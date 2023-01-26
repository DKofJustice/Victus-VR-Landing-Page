import React from 'react';
import VictusLogoGreen from './../Assets/Victus-Logo-green.png';
import SearchIcon from './../Assets/material-symbols_search-rounded.png';
import ShopIcon from './../Assets/material-symbols_shopping-bag-outline.png';
import UserIcon from './../Assets/mdi_user-circle-outline.png';
import HamButton from './../Assets/mdi_hamburger-menu.svg';
import HideHeader from './../Assets/ph_x-duotone.svg';
import { useState } from 'react';

export default function Header() {

    const [header, setHeader] = useState(false);
    const [headerPos, setHeaderPos] = useState('');
    const [headerScrolledClass, setHeaderScrolledClass] = useState('');

    const toggleHeader = () => {
        if (header === false) {
            setHeaderPos('header-showing');
            setHeader(true);
        }
    };

    const hideHeader = () => {
      if (header === true) {
        setHeaderPos('');
        setHeader(false);
      }
    }

    const changeScrollBackground = () => {
      if (window.pageYOffset > 0 && window.innerWidth >= 745) {
        setHeaderScrolledClass('header-scrolled');
      } else {
        setHeaderScrolledClass('');
      }
    }

    window.addEventListener('scroll', changeScrollBackground);

  return (
    <>
    <img src={HamButton} alt="ham-button" onClick={toggleHeader} />
    <header className={`${headerPos} ${headerScrolledClass}`}>
      <img src={HideHeader} alt="hide-header" onClick={hideHeader} />
        <div className='header-content'>
          <div className='logo-content'>
              <img src={VictusLogoGreen} alt="victus-logo-green" />
              <p>Victus</p>
          </div>

          <nav className='nav-links'>
            <p>Home</p>
            <p>Shop</p>
            <p>Contact</p>
          </nav>

          <nav className='user-links'>
            <div>
              <img src={SearchIcon} alt="search-icon" />
              <p>Search Item</p>
            </div>
            <div>
              <img src={ShopIcon} alt="shop-icon" />
              <p>Shop</p>
            </div>
            <div>
              <img src={UserIcon} alt="user-icon" />
              <p>Login</p>
            </div>
          </nav>
        </div>
    </header>
    </>
  )
}
