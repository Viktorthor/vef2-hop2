import React, { Fragment, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
//import './Category.scss';
import { getProductFromCat, getCategoryDetails } from '../../api/index';
import { IProduct, ICategory } from '../../api/types';
//import Products from '../../components/product/Product';
//import Search from '../../components/search/Search';
import Products from '../../components/products/Products';


export default function Category(props: any) {
  const { id } = props.match.params;

  
  console.log("Typpasvigar");
  
  
  //const [categories, setCategories] = useState({} as ICategory);
  const [products, setProducts] = useState([] as IProduct[]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const foo = async () => {
      setLoading(true);
      const categor = await getProductFromCat(id); 
      const cattemp = await getCategoryDetails(categor[0].category_id);
      setCategory(cattemp.title);
      setProducts(categor);
      setLoading(false);
    };
    foo();
  }, []);
  /*
  useEffect(() => {
    const foo = async () => {
      const cat = await getCategories();
      setCategories(cat.items);
      setLoading(false);
    };
    foo();
  }, []);
  */


  /*
  if (notFound) return {
    <Redirect to="/notFound"></Redirect>
  }
  */

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
















