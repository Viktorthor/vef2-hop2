import React, { Fragment, useState, useEffect } from 'react';
import './Product.scss'
import { IProduct } from '../../api/types';
import { getProductsDetails, getProductFromCategory } from '../../api/index';
import Button from '../../components/button/Button';
import Products from '../../components/products/Products';
import { postCart } from '../../api/index';

export default function ProductRoutes(props: any) {

  const { id } = props.match.params;
  // console.log('HALLO',props);

  const [details, setDetails] = useState({} as IProduct);
  const [products, setProducts] = useState([] as IProduct[]);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(0);
  const [add, setAdd] = useState({ added: ''});
 
   // Sækir vörur
   useEffect(() => {
    const foo = async () => {
      setLoading(true);
      const item: IProduct = await getProductsDetails(id);
      // console.log(item);
      setDetails(item);
      setLoading(false);
    };
    foo();
  }, []);
  // Sækir vorur i sama flokki
  useEffect(() => {
    const foo = async () => {
      setLoading(true);
      const categor = await getProductFromCategory(id);
      setProducts(categor);
      setLoading(false);
    };
    foo();
  }, []);

  async function onClickHandler(i: number) {
    setLoading(true);
    const item: IProduct = await getProductsDetails(i);
    setDetails(item);
    setLoading(false);
  }

  function onChangeAmount(e: any) {
    setAmount(e.target.value);
  }

  async function addToCart() {
    const bag = await postCart(id, amount);
    setAdd({
      ...add,
      added: "Bætt hefur verið í körfu",
    })
  }

  if (loading) return (
    <div className="details">
      <h3>Sæki upplýsingar</h3>
    </div>
  )
  return (
    <Fragment>
      <div className="details">
      <div className="details__image">
        <img className="details__img" src={details.image}></img>
      </div>
      <div className="details__info">
        <h3 className="details__title">{details.title}</h3>
        <div className="details__catpri">
        <p>Flokkur: {details.category_title}</p>
        <p>Verð: {details.price} kr.-</p>
        </div>
        {typeof details.description === 'string' && (details.description.split('\n').map((item, key) => (
          <p className="details__description" key={key}>{item}</p> ))
        )}
        <div className="details__lower">
          <span>Fjöldi</span>
          <input onChange={onChangeAmount} className="details__input" type="textarea"></input>
          <div className="details__button">
            <Button
              small={true}
              children="Bæta við körfu"
              onClick={ addToCart }
            ></Button>
          </div>
        </div>
        <p> { add.added } </p>
      </div>
    </div>
    <div className="more">
      <h3>Meira úr {details.category_title}</h3>
      <div className="more__products">
      {/*ATH Þetta er rétt en síðan renderast ekki þegar ýtt er á aðra vöru, samt breytist id-ið */}
      <Products
        products={products}
      >
      </Products>

      </div>
    </div>
    </Fragment>
  );
}
