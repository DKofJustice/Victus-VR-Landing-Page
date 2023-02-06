import React from 'react';
import BlueStar from './../Assets/Star 3-min.png';

export default function ReviewBox({ id, name }) {

    const imageCount = [
        {
            id: 0,
            imageID: 1
        },
        {
            id: 1,
            imageID: 2
        },
        {
            id: 2,
            imageID: 3
        },
        {
            id: 3,
            imageID: 4
        },
        {
            id: 4,
            imageID: 5
        },
    ];

  return (
    <div key={id} className='review-box'>
        <div className='review-box-content'>
            <p className='name'>{name}</p>

            <p className='review-text'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat bibendum sem, id eleifend diam condimentum eget.”</p>

            <div className='star-rating'>
                {imageCount.map(image => {
                    return <img key={image.id} src={BlueStar} alt="" />
                })}
            </div>
        </div>

        <div className='corner-lane'></div>
    </div>
  )
}
