import React, { Fragment, useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import Product from '../product/Product';
import { getProducts } from '../../api/index';
import './Home.scss';
import { IProduct } from '../../api/types';
//import Products from '../../components/products/Products';

export default function Home() {
  const [products, setProducts] = useState([] as IProduct[]);
  useEffect(() => {
    const foo = async () => {
      const item = await getProducts();
      setProducts(item.items);
    };
    foo();
  }, []);

  return (
    <Fragment>
      <Helmet title="Forsíða" />
      <div className="home">
        <h1>New Products</h1>
          <div className="products">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
              ></Product>
            ))}
          </div>
      </div>
    </Fragment>
  );
}


/**
 * {data.map((i:any ) => {
 *  <Product
 *    productDetails={i}
 *  ></Product>
 * })}
 */
