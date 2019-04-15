import React from 'react';

import './Products.scss';
import { IProduct } from '../../api/types';

export default function Products(props: any) {
  const { products, history } = props;
  console.log('P',props);

  return (
    <div className="products"> 
      {products.map((product: IProduct)  => (
        <a href={`/product/${product.id}`}>
        <div className="product"
         
        >
          <div className="product__image">
            <img className="product__img" src={product.image}></img>
          </div>
          <div className="product__info">
            <div className="product__leftContainer">
              <p className="product__title">{product.title}</p>
              <p className="product__category">{product.category}</p>
          </div>
          <p className="product__price">{product.price} kr.-</p>
          </div>
        </div>
        </a>
      ))}
    </div>
      
  );
}