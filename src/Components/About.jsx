import React from 'react';
import GlassesInner from './../Assets/oculus-quest-1 1.png';

export default function About() {
  return (
    <div className='about' id='about'>
        <div className='about-content'>
            <div className='about-left'>
                <h2>What does this Vr Set stand for?</h2>
                <p>The mission with this set is to offer a new
                    kind of experience to our customers, one that will
                    enable them to explore new worlds in first person experience.
                    They will be able to be fully immersed in all the experiences
                    that we will provide.</p>
            </div>

            <div className='about-right'>
                <div className='glasses-inner'>
                    <img src={GlassesInner} alt="glasses-inner" />
                </div>
            </div>
        </div>
    </div>
  )
}
