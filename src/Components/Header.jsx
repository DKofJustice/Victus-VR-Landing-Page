import React from 'react';
import VictusLogoGreen from './../Assets/Victus-Logo-green.png';
import SearchIcon from './../Assets/material-symbols_search-rounded.png';
import ShopIcon from './../Assets/material-symbols_shopping-bag-outline.png';
import UserIcon from './../Assets/mdi_user-circle-outline.png';
import HamButton from './../Assets/mdi_hamburger-menu.svg';

export default function Header() {
  return (
    <header>
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

          <nav className='user-link'>
            <img src={SearchIcon} alt="search-icon" />
            <img src={ShopIcon} alt="shop-icon" />
            <img src={UserIcon} alt="user-icon" />
          </nav>
        </div>
    </header>
  )
}
