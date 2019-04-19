import React, { Fragment, useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import './Cart.scss';

import CartItem from '../../components/cart/Cart';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { IProduct, ICart } from '../../api/types';
import { getCart, getProducts, placeOrder } from '../../api/index';
import Products from '../../components/products/Products';
import { Link } from 'react-router-dom';


export default function Cart() {
  const [cart, setCart] = useState([] as ICart[]);
  const [products, setProducts] = useState([] as IProduct[]);
  // const [errors, setErrors] = useState([] as Ierrors[]);

  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState({ name: '', address: '' });
  const [registered, setRegistered] = useState(false);
  const [cartMessage, setCartMessage] = useState('');
  const [cartLoading, setCartLoading] = useState(false);

  useEffect(() => {
    const foo = async () => {
      setLoading(true);
      const items = await getCart();
      setCart(items.result);
      setLoading(false)
    };
    foo();
  }, []);

  function onChangeName(e: any) {
    setData({
      ...data,
      name: e.target.value,
    })
  }

  function onChangeAddress(e: any) {
    setData({
      ...data,
      address: e.target.value,
    })
  }

  /*
  async function onCartChange() {
    setLoading(true);
    const items = await getCart();
    if (items !== null) {
      setCart(items.lines);
      setTotal(items.total)
    } 
    setLoading(false)
  }
  */

  async function onSubmit(){
    setCartLoading(true);
    setCartMessage('');
    //setErrors([]);
    const result = await placeOrder(data.name, data.address);
    console.log('Pöntun', result);

    if (!result.success) {
      //setErrors(result.result.errors);
      <p>hallo</p>
    } else {
      setCartMessage('Pöntun send!')
      setRegistered(true);
    }
    setCartLoading(false);
  } 
  
  // skoða hvort notandi sé skráður inn
  /*
  if (!username) {
    return (
      <Fragment>
        <Helmet title="Karfa" />
        <div className="cart">
          <h1>Vinsamlegast skráðu þig inn til þess að skoða körfu.</h1>
          <Link to="/login" className="register__linkToLogin">Innskráning</Link>
        </div>
      </Fragment>
    );
  }
  */
  // skoða hvort karfan sé tóm
  //else 
  if (total === 0) {
    return (
      <Fragment>
      <Helmet title="Karfa" />
      <div className="cart">
        <h1>Engar vörur í körfu!</h1>
        <Link to="/" className="register__linkToLogin">Skoða vörur</Link>
      </div>
    </Fragment>
    )
  } else {
  return (
    <Fragment>
      <Helmet title="Karfa" />
      <div className="cart">
        <h1>Karfa</h1>
        <div className="cart__item">
          {loading && (
            <h2>Sæki vörur...</h2>
          )}
          {products.map((item) => (
            <p>{item.title}</p>
          ))}
        </div>
      </div>

      <div className={'shipping'} >
        <h2 className={'shipping__header'}>Senda inn pöntun</h2>
        <div className={'shipping__form'}>
          <Input
            label={'Nafn:'}
            onChange={onChangeName}>
          </Input>
          <Input
            label={'Heimilisfang:'}
            onChange={onChangeAddress}>
          </Input>      
        </div>
        <div className="shipping__button">
          <Button 
            // onClick={onSubmit}
          >
            Senda inn pöntun
          </Button>
        </div>
      </div>
    </Fragment>
  );
}
}
