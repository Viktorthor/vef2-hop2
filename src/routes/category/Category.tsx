import React, { useState, useEffect } from 'react';
import { getCategory } from '../../api/index';
import { IProduct } from '../../api/types';
import Products from '../../components/products/Products';


export default function Category(props: any) {
  const { id } = props.match.params;
  
  
  const [products, setProducts] = useState([] as IProduct[]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [category, setCategory] = useState("");

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
















