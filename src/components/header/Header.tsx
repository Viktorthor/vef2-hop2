import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { logOut } from '../../api/index';
import Button from '../../components/button/Button';

import './Header.scss';

export default function Home() {

  const username = localStorage.getItem('username');

  if(localStorage.getItem('token')){
    return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">
          <Link className="header__titleLink" to="/">Vefforritunarbúðin</Link>
        </h1>
        <div className="header__haegri">
        <p> { username } </p>
        <Link to={`/`} onClick={ logOut }>
        <p> (Útskrá) </p>
        </Link>
        <NavLink activeClassName="header__link--selected" exact to="/orders">Pantanir</NavLink>
        <NavLink activeClassName="header__link--selected" exact to="/cart">Karfa</NavLink>
        <NavLink activeClassName="header__link--selected" exact to="/products/250">Nýjar vörur</NavLink>
        <NavLink activeClassName="header__link--selected" exact to="/categories">Flokkar</NavLink>
        </div>
      </div>
    </header>
  )} else return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">
          <Link className="header__titleLink" to="/">Vefforritunarbúðin</Link>
        </h1>
        <div className="header__haegri">
        <NavLink activeClassName="header__link--selected" exact to="/register">Nýskrá</NavLink>
        <NavLink activeClassName="header__link--selected" exact to="/login">Innskrá</NavLink>
        <NavLink activeClassName="header__link--selected" exact to="/cart">Karfa</NavLink>
        <NavLink activeClassName="header__link--selected" exact to="/products/250">Nýjar vörur</NavLink>
        <NavLink activeClassName="header__link--selected" exact to="/categories">Flokkar</NavLink>
        </div>
      </div>
    </header>
  );
}
