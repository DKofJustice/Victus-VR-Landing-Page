import React from 'react';

export default function ProductBox({ image, title, price }) {
  return (
    <div className='product-box'>
        <div className='product-image-container'>
            <img src={image} alt="product" className={`product-image ${title}`}/>
        </div>
        <p className='product-title'>{title}</p>
        <p className='product-price'>{price}</p>

        <div className='product-buttons'>
            <button className='buy-now'>Buy Now</button>
            <button className='learn-more'>Learn More</button>
        </div>
    </div>
  )
}
