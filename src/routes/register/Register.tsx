import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Register.scss';
import '../../components/button/Button.scss';

export default function Register() {
  return (
    <div className = "reg">
    <div className = "reg__contents">
      <div className = "reg__head">
        <h1>Nýskráning</h1>
      </div>
      <div className = "reg__username">
        Notendanafn: <input type="text" name="username"/>
      </div>

      <div className = "reg__password">
        Lykilorð: <input type="password" name="password"/>
      </div>

      <div className = "reg__email">
        Netfang: <input type="email" name="email"/>
      </div>

      <div className = "button">
        <p>Nýskrá</p>
      </div>

      <div className = "reg__login">
        <NavLink activeClassName="header__link--selected" exact to="/login">Innskráning</NavLink>
      </div>
    </div>
   </div>
  )
}
