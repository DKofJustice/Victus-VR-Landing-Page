import React from 'react';
import featuresList from './featuresList';

export default function Features() {
  return (
    <div className='features'>
        <div className='features-content'>
            <nav className='features-nav'>
                {featuresList.map(featureTitle => {
                    return <div className={`feature-tab ${featureTitle.title}`}>{featureTitle.title}</div>
                })}
            </nav>

            <div className='feature-section'>
                <div className='feature-image'><img src={featuresList[0].image} alt="feature" /></div>

                <p>{featuresList[0].text}</p>
            </div>
        </div>
    </div>
  )
}
