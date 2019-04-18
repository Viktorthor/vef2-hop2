import React, { Fragment, useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import './Cart.scss';

import Input from '../../components/input/Input';
import { getCart } from '../../api/index';


export default function Cart() {
  /*
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
  */
}
