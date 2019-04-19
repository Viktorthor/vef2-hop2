import React, { Fragment, useState, useEffect } from 'react';
import './Categories.scss';
import { getCategories } from '../../api/index';
import { IProduct, ICategory} from '../../api/types';
import { Link } from 'react-router-dom';
//import classNames from 'classnames';

export default function CategoriesRoute(props: any) {
  const { category, onClick, notClickable } = props;
  console.log('P', props);

  const [products, setProducts] = useState([] as IProduct[]);
  const [categories, setCategories] = useState([] as ICategory[]);
  const [loading, setLoading] = useState(false);

 function click(e: any, id: number){
  if (onClick) onClick(id);
}

  // Sækir flokka
  useEffect(() => {
    const foo = async () => {
      const cat = await getCategories();
      setCategories(cat.items);
      setLoading(false);
    };
    foo();
  }, []);


  return (
    <div className="categories">
      {categories.map((category) => (
      // <Link to={`/categories/${category.id}`} onClick={(e: any) => click(e, category.id)} className={classNames("category",notClickable && "notClickable")}>
          <div
            key={category.id}
            className="categories__box"
          >
            <p className="categories__title">{category.title}</p>
          </div>
      //</Link>
    ))}
  </div>
  )
}
