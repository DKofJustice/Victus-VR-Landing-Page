import React from 'react';
import VRFrontView from './../Assets/VR-front-view.png';
import CornerLinesLeft from './../Assets/Corner Lines Left.png';
import CornerLinesRight from './../Assets/Corner Lines Right.png';
import LandingButton from './../Assets/material-symbols_shopping-bag-outline.png';
import DownArrow from './../Assets/material-symbols_arrow-back-ios.png';

export default function Landing() {

  const handleClickScroll = () => {
    const element = document.getElementById('about');

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='landing'>
        <div className='sphere-content'></div>

        <div className='glasses-front-view'>
          <img src={VRFrontView} alt="vr-front-view" />
        </div>

        <div className='corner-lines'>
          <img src={CornerLinesLeft} alt="corner-lines-left" />
          <img src={CornerLinesRight} alt="corner-lines-right" />
        </div>

        <div className='landing-content'>
          <h1>Victus VR set is here</h1>
          <p>A VR SET THAT WILL IMMERSE YOU IN NEW WORLDS</p>

          <button>
            <p>BUY</p>
            <img src={LandingButton} alt="landing-button" />
          </button>

          <img src={DownArrow} onClick={handleClickScroll} alt="down-arrow" />
        </div>
    </section>
  )
}
