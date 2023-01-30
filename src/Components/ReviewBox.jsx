import React from 'react';
import BlueStar from './../Assets/Star 3-min.png';

export default function ReviewBox({ name }) {

    const imageCount = [1, 2, 3, 4, 5];

  return (
    <div className='review-box'>
        <div className='review-box-content'>
            <p className='name'>{name}</p>

            <p className='review-text'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat bibendum sem, id eleifend diam condimentum eget.”</p>

            <div className='star-rating'>
                {imageCount.map(image => {
                    return <img src={BlueStar} alt="" />
                })}
            </div>
        </div>

        <div className='corner-lane'></div>
    </div>
  )
}
