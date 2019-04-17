import React from 'react';

import './Products.scss';
import { Link } from 'react-router-dom';
import { IProduct } from '../../api/types';

export default function Products(props: any) {
  const { products,  onClick } = props;
  function click(e: any, id: number){
    if (onClick) onClick(id);
  }
  console.log('P',props);

  return (
 
      <div className="products"> 
        {products.map((product: IProduct)  => (
            <div className="productsContainer">
            <Link to={`/product/${product.id}`} onClick={(e: any) => click(e, product.id)} className="productBTTN">
              <div className="products__image">
                <img className="products__img" src={product.image}></img>
              </div>
              <div className="products__info">
                <div className="products__leftContainer">
                  <p className="products__title">{product.title}</p>
                  <p className="products__category">{product.category_title}</p>
              </div>
              <p className="products__price">{product.price} kr.-</p>
              </div>
              </Link>
            </div>
        ))}
      </div>
    
  );
}


  