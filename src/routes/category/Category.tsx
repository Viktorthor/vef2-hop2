import React, { Fragment, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
//import './Category.scss';
import { getCategoryDetails, getProductFromCategory, getCategory, getCategories } from '../../api/index';
import { IProduct, ICategory } from '../../api/types';
import Products from '../../components/products/Products';
import Search from '../../components/search/Search';
import Button from '../../components/button/Button';


export default function Category(props: any) {
  const { id } = props.match.params;
  console.log(props);


  const [categories, setCategories] = useState({} as ICategory);
  const [products, setProducts] = useState([] as IProduct[]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(()=>{
    const foo = async () => {
      setLoading(true);
      const cat: ICategory = await getCategoryDetails(id);
    
      if(cat === null){
        setNotFound(true);
        return;
      }
      setCategories(cat);
      const itemsFromCat = await getCategory(id, 10);
      setProducts(itemsFromCat);
      setLoading(false)
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
    <Fragment>
      <div className="home">
        
      </div>
    </Fragment>
    
   /* <p>hallo</p> */
  )
  
}
















