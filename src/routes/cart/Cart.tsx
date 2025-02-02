import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet';

import CartItem from '../../components/cart/cart';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import './Cart.scss';

import { getProducts, getCart, placeOrder } from '../../api/index';
import { IProduct, ICart, IErrors } from '../../api/types';

export default function Cart() {
  const username = localStorage.getItem('username');

  const [cart, setCart] = useState([] as ICart[]);
  const [errors, setErrors] = useState([] as IErrors[]);

  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState({ name: '', address: '' });
  const [registered, setRegistered] = useState(false);
  const [cartMessage, setCartMessage] = useState('');
  const [cartLoading, setCartLoading] = useState(false);

  useEffect(()=>{
    const foo = async () => {
      setLoading(true);
      const items = await getCart();
      console.log(items);
      if (items !== null) {
        setCart(items.lines);
        setTotal(items.total)
      }
      setLoading(false)
    };
    foo();
  }, []);

  function onChangeName(e: any){
    setData({
      ...data,
      name: e.target.value,
    });
  }

  function onChangeAddress(e: any){
    setData({
      ...data,
      address: e.target.value,
    });
  }

  async function onCartChange() {
    setLoading(true);
    const items = await getCart();
    console.log(items);
    
    if (items !== null) {
      setCart(items.lines);
      setTotal(items.total)
    } 
    setLoading(false)
  }

  // Afhvejru virkar þetta ekki eins og það á að gera?
  async function onSubmit(){
    setCartLoading(true);
    setCartMessage('');
    setErrors([]);
    const result = await placeOrder(data.name, data.address);
    console.log('Pöntun', result);
    

    if (!result.success) {
      setErrors(result.result.errors);
    } else {
      setCartMessage('Pöntun send')
      setRegistered(true);
    }
    setCartLoading(false);
  } 
  
  // Athugum hvort notandi sé skráður inn
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
  // Athugum hvort karfan sé tóm, ef svo er skkilum upplýsingum
  else if (total === 0) {
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
    // Annars birtum við körfuna með hlutum í
    return (
      <Fragment>
        <Helmet title="Karfa" />
        <div className="cart">
          {loading && (
            <h2>Sæki vörur...</h2>
          )}
          {username && cart.map((product) => (
            <CartItem
              onChange={onCartChange}
              onClick={null}
              key={product.id}
              product={product}
            ></CartItem>
          ))}
          <h3 className={'cart__total'}>Karfa samtals: {total} kr.-</h3>
        </div>

        {errors && (
          <ul className={'errors'}>
            {errors && errors.map((error: any) => (
              <li key={error.field} className={'errors__message'}>{error.field}, {error.error}</li>
            ))}
          </ul>
        )}

        <div className={'shippingInfo'} >
          <h2 className={'shippingInfo__header'}>Senda inn pöntun</h2>
          <div className={'shippingInfo__form'}>
            <Input
              label={'Nafn:'}
              onChange={onChangeName}>
            </Input>
            <Input
              label={'Heimilisfang:'}
              onChange={onChangeAddress}>
            </Input>      
          </div>
          
          <div className="shippingInfo__button">
            <Button 
              onClick={onSubmit}
            >
              Senda inn pöntun
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
}