import React from 'react';
import LogoWhite from './../Assets/Logo-white.png';

export default function Footer() {
  return (
    <footer>

        <div className='footer-art-1'>
            <div className='circle-1'></div>
            <div className='circle-2'></div>
        </div>

        <div className='footer-art-2'>
            <div className='white-circle'></div>
        </div>

        <div className='footer-content'>
            <div className='logo-white'>
                <img src={LogoWhite} alt="logo-white" />
                <h2>Victus</h2>
            </div>

            <div className='footer-menu'>
                <div className='pages'>
                    <p>Homepage</p>
                    <p>Store</p>
                    <p>Contact</p>
                </div>

                <div className='other-links'>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Terms and Conditions</p>
                </div>
                
                <div className='contact'>
                    <p>Customer Support</p>
                    <p>Phone: +1 453 540 Victus</p>
                    <p>Email: support@victus.com</p>
                    <p>Want to use chat ? Click here</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
