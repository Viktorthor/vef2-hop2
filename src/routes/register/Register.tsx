import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Register.scss';

export default function Register() {
  return (
    <div className = "reg__contents">
      <div className = "reg__username">
        Notendanafn: <input type="text" name="username"/>
      </div>

      <div className = "reg__password">
        Lykilorð: <input type="password" name="password"/>
      </div>

      <div className = "reg__login">
        <NavLink activeClassName="header__link--selected" exact to="/login">Nú þegar skráður?</NavLink>
      </div>
    </div>
  )
}
