import React from 'react';
import OculusSet from './../Assets/Oculus-Rift-CV1-Headset-Front_with_transparent_background 1-min.png';
import ReviewBox from './ReviewBox';

export default function Reviews() {

    const names = ['Jeremy', 'Mike', 'Anna'];

  return (
    <div className='reviews'>
        <div className='oculus-set'>
            <img src={OculusSet} alt="oculus-set" />
        </div>

        <div className='reviews-content'>
            <div className='reviews-windows'>
                {names.map(name => {
                    return <ReviewBox name={name} />
                })}
            </div>
        </div>
    </div>
  )
}
