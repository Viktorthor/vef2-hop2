import React, { Fragment, useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import './Cart.scss';

import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { IProduct, ICart } from '../../api/types';
import { getCart, getProducts } from '../../api/index';
import Products from '../../components/products/Products';


export default function Cart() {
  const [data, setData] = useState({ name: '', address: ''});

  const [cart, setCart] = useState([] as ICart[]);
  // const [errors, setErrors] = useState([] as IErrors[]);
  const [products, setProducts] = useState([] as IProduct[]);
  const [loading, setLoading] = useState(false);

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
