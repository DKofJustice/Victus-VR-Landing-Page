import React, { useState, useEffect } from 'react';
import featuresList from './featuresList';

export default function Features() {

    const [activeButton, setActiveButton] = useState('Graphics');
    const [activeKey, setActiveKey] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        setFadeOut(true);
    }, []);

    const handleTabClick = (buttonID, activeTabKey) => {
        setActiveButton(buttonID);
        setActiveKey(() => activeTabKey);

        if (fadeOut === true) {
            setFadeOut(false)
        }
        setTimeout(() => {
            setFadeOut(true);
        }, 100);
    }

  return (
    <div className='features'>
        <div className='features-content'>
            <nav className='features-nav'>
                {featuresList.map(featureTitle => {
                    return <div key={featureTitle.id} className={`feature-tab ${featureTitle.title} ${activeButton === featureTitle.title ? 'active-tab' : ''}`}
                    onClick={() => handleTabClick(featureTitle.title, featureTitle.id)} >{featureTitle.title}</div>
                })}
            </nav>

            <div className='feature-section'>
                <p className='feature-text-mobile'>{featuresList[activeKey].text}</p>
                <div className='feature-image'><img src={featuresList[activeKey].image} className={`${featuresList[activeKey].title} 
                ${fadeOut ? 'image-fade-in' : ''}`} alt="feature" /></div>

                <p className='feature-text-desktop'>{featuresList[activeKey].text}</p>
            </div>
        </div>
    </div>
  )
}
