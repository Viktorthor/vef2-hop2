import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Register.scss';
//import Button from '../../components/button/Button.scss';
import { registerUser } from '../../api/index';
import { Redirect } from 'react-router-dom'

export default function Register(props: any) {
  // Veit ekki hvað er í gangi hér, virkar ekki
  const [data, setData] = useState({ userName: '', password: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [errors, setErrors] = useState([]);
/*
  async function onSubmit() {
    setLoading(true);
    setErrors([]);
    const result = await registerUser(data.userName, data.password, data.email);
  
    if(!result.success) {
      setErrors(result.result.errors);
    } else {
      setRegistered(true);
    }
      setLoading(false);
  }

  function onChangeUser(e: any){
    setData({
      ...data,
      user: e.target.value,
    });
  }

  function onChangePassword(e: any){
    setData({
      ...data,
      password: e.target.value,
    });
  }

  function onChangeEmail(e: any){
    setData({
      ...data,
      email: e.target.value,
    });
  }
    
  if (registered) {
    return(
      <div className={'register__wrapper'}>
        <h1>Nýskráning</h1>
        <h3 className="register__success">Nýskráning tókst, vinsamlega skráðu þig inn.</h3>
        <Link to="/login" className="register__linkToLogin">Innskráning</Link>
      </div>
    )
  }

//SKODA BETUR
  return (
    <div className={'register__wrapper'}>
    <h1>Nýskráning</h1>
    {errors && (
          <div className={'errors'}>
            {errors && errors.map((error: any) => (
              <p key={error.field} className={'errors__message'}>{error.field}, {error.error}</p>
            ))}
        </div>
    )}
  <div className="register__form">
    <Input
      label={'Notendanafn:'}
      onChange={onChangeUser}>
    </Input>
    <Input
      label={'Lykilorð:'}
      onChange={onChangePassword}>
    </Input>
    <Input
    label={'Netfang:'}
    onChange={onChangeEmail}>
    </Input>
    </div>

    <div className="register__button">
      <Button 
      onClick={onSubmit}
      >Nýskrá
      </Button>
    </div>
    <Link to="/login" className="register__linkToLogin">Innskráning</Link>
  </div>
  );



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
  */
}
