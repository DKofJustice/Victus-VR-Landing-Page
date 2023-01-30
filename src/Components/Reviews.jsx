import React from 'react';
import OculusSet from './../Assets/Oculus-Rift-CV1-Headset-Front_with_transparent_background 1-min.png';
import ReviewBox from './ReviewBox';

export default function Reviews() {

    const names = ['Jeremy', 'Mike', 'Anna'];

  return (
    <div className='reviews'>
        <div>
            <img src={OculusSet} alt="oculus-set" />
        </div>

        <div className='reviews-content'>
            <div className='reviews'>
                {names.map(name => {
                    return <ReviewBox name={name} />
                })}
            </div>

            <div className='review-title-text'>
                <h2>User Reviews</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat bibendum sem, id eleifend diam condimentum eget. Nunc elit magna, pretium at dui in, maximus laoreet ex.</p>

            </div>
        </div>
    </div>
  )
}
