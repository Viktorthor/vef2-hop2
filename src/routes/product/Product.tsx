import React, { Fragment, useState, useEffect } from 'react';
import './Product.scss'
import { IProduct } from '../../api/types';
import { getProductsDetails, getProductFromCat } from '../../api/index';
import Button from '../../components/button/Button';
import Products from '../../components/products/Products';

export default function ProductRoutes(props: any) {
  
  const { id } = props.match.params;
  console.log(props);

  const [details, setDetails] = useState({} as IProduct);
  const [products, setProducts] = useState([] as IProduct[]);
  const [loading, setLoading] = useState(false);
  //const id = 999;
   // Sækir vörur
   useEffect(() => {
    const foo = async () => {
      setLoading(true);
      const item: IProduct = await getProductsDetails(id);
      console.log(item);
      setDetails(item);
      setLoading(false);
    };
    foo();
  }, []);
  // Sækir vorur i sama flokki
  useEffect(() => {
    const foo = async () => {
      setLoading(true);
      const categor = await getProductFromCat(id);
      setProducts(categor);
      setLoading(false);
    };
    foo();
  }, []);

  async function onClickHandler() {
    console.log('hallo');
  }

  if (loading) return (
    <div className="details">
      <h3>Sæki upplýsingar</h3>
    </div>
  )
    console.log(details);
  return (
    <Fragment>
      <div className="details">
      <div className="details__image"> 
        <img className="details__img" src={details.image}></img>
      </div>
      <div className="details__info">
        <h3 className="details__title">{details.title}</h3>
        <p className="details__category">Flokkur: {details.category}</p>
        <p className="details__price">Verð: {details.price} kr.-</p>
        {typeof details.description === 'string' && (details.description.split('\n').map((item, key) => (
          <p className="details__description" key={key}>{item}</p> ))
        )}
        <div className="details__lower">
          <span>Fjöldi</span>
          <input className="details__input" type="textarea"></input>
          <Button
            small={true}
            children="Bæta við körfu"
            /*
            TODO onclick handler til að bæta í körfu + loading state
            */
          ></Button>
        </div>
      </div>
    </div>
    <div className="more">
      <h3>Meira úr {details.category}</h3>
      <div className="more__products">
        
      </div>
    </div>
    </Fragment>
  );
}
