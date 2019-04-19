import React, { Fragment, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
//import './Category.scss';
import { getProductFromCategory, getCategoryDetails, getCategory } from '../../api/index';
import { IProduct, ICategory } from '../../api/types';
//import Products from '../../components/product/Product';
//import Search from '../../components/search/Search';
import Products from '../../components/products/Products';


export default function Category(props: any) {
  const { id } = props.match.params;


  const [products, setProducts] = useState([] as IProduct[]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [category, setCategory] = useState(false);

  useEffect(() => {
    const foo = async () => {
      setLoading(true);
      const categor = await getCategory(id, 10);
      setCategory(categor[0].category_title);
      setProducts(categor);
      setLoading(false);
    };
    foo();
  }, []);

  if (loading) return (
    <div>
      <h3>Sæki upplýsingar</h3>
    </div>
  )

  return (
    <React.Fragment>
      <h1>{category}</h1>
    <Products
      products={products}
      >
      </Products>
    </React.Fragment>
  )
}
