import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Register.scss';
import '../../components/button/Button.scss';

export default function Register() {
  // Veit ekki hvað er í gangi hér, virkar ekki
  const [data, setData] = useState({ userName: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  // async function onSubmit() {
  //   setLoading(true);
  //   setErrors([]);
  //   const result = await loginUser(data.userName, data.password);
  //
  //   if(!result.success) {
  //     setErrors(result.response);
  //     setLoading(false);
  //     return;
  //   }
  //   setLoading(false);
  // }

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
