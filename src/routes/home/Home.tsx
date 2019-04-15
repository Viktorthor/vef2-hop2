import React, { Fragment, useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import Product from '../product/Product';
import Categories from '../categories/Categories';
import { getProducts } from '../../api/index';
import { getCategories } from '../../api/index'; 
import './Home.scss';
import { IProduct, ICategory } from '../../api/types';


export default function Home() {
  const [products, setProducts] = useState([] as IProduct[]);
  const [categories, setCategories] = useState([] as ICategory[]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const foo = async () => {
      const item = await getProducts();
      const cat = await getCategories();
      setProducts(item.items);
      setCategories(cat.items);
      setLoading(false);
    };
    foo();
  }, []);

  /*
  useEffect(() => {
    const baz = async () => {
      const cat = await getCategories();
      setCategories(cat.categories);
      setLoading(false);
    };
    baz();
  }, []);
*/


  return (
    <Fragment>
      <Helmet title="Forsíða" />
      <div className="home">
        <h1>Nýjar Vörur</h1>
          <div className="products">
            {loading && (
              <h2>Sæki vörur...</h2>
            )}
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
              ></Product>
            ))}
          </div>
          <div className="categories">
              {categories.map((category) => (
                <Categories
                  key={category.title}
                  category={category}
                ></Categories>
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
