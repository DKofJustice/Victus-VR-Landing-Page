import { React, useRef, useState, useEffect } from 'react';
import ProductBox from './ProductBox';
import productList from './ProductList';

export default function Products() {

    const [isIntersecting, setIsIntersecting] = useState(false);

  const productTitle = useRef();
  const productContent = useRef();


  //Observer Options
  const options = {
    rootMargin: '30px',
    threshold: 0.5
  };

  const productObserver = new IntersectionObserver(([entry]) => {
    setIsIntersecting(entry.isIntersecting);
  }, options);

  useEffect(() => {
    
    productObserver.observe(productTitle.current);
    productObserver.observe(productContent.current);

    return () => {
        productObserver.unobserve(productTitle);
        productObserver.unobserve(productContent);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productTitle, productContent]);

  return (
    <div className='products'>
        <div className='products-content'>
            <h2 className={`product-title ${isIntersecting? 'product-title-anim' : ''}`}
            ref={productTitle} >Check our other products</h2>

            <div className={`product-list ${isIntersecting? 'product-content-anim' : ''}`}
            ref={productContent} >
                {productList.map(product => {
                    return <ProductBox 
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    />
                })}
            </div>
        </div>
    </div>
  )
}
