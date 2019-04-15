import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Login.scss';
import '../../components/button/Button.scss';

export default function Login() {
  return (
    <div className = "login">
    <div className = "login__contents">
    <div className = "login__head">
        <h1>Innskráning</h1>
      </div>

      <div className = "login__username">
        Notendanafn: <input type="text" name="username"/>
      </div>

      <div className = "login__password">
        Lykilorð: <input type="password" name="password"/>
      </div>

      <div className = "button">
        <p>Skrá inn</p>
      </div>

      <div className = "login__reg">
        <NavLink activeClassName="header__link--selected" exact to="/register">Nýskrá</NavLink>
      </div>
    </div>
    </div>
  )
}
