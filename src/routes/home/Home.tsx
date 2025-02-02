import React, { Fragment, useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import Products from '../../components/products/Products';
import Categories from '../categories/Categories';
import { getProducts } from '../../api/index';
import { getCategories } from '../../api/index'; 
import './Home.scss';
import { IProduct, ICategory } from '../../api/types';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';


export default function Home() {
  const [products, setProducts] = useState([] as IProduct[]);
  const [categories, setCategories] = useState([] as ICategory[]);
  const [loading, setLoading] = useState(false);
  // Sækir vörur
  useEffect(() => {
    const foo = async () => {
      const item = await getProducts();

      setProducts(item.items);
      setLoading(false);
    };
    foo();
  }, []);
  // Sækir flokka
  useEffect(() => {
    const foo = async () => {
      const cat = await getCategories();
      setCategories(cat.items);
      setLoading(false);
    };
    foo();
  }, []);

  // console.log(products);
  return (
    <Fragment>
      <Helmet title="Forsíða" />
      <div className="home">
        <h1>Nýjar Vörur</h1>
          <div className="products">
            {loading && (
              <h2>Sæki vörur...</h2>
            )}
            <Products
              products={products}
              history={history}
            ></Products>
          </div>

          <div className="takki">
            <Link to="/categories">
              <Button
              >
              Sýna alla flokka
              </Button>
            </Link>
          </div>

          <div className="categories">
                <Categories
                  categories={categories}
                ></Categories>
          </div>
      </div>
    </Fragment>
  );
}
