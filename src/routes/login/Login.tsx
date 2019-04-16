import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { loginUser } from '../../api/index';
import Button from '../../components/button/Button';

import './Login.scss';
import '../../components/button/Button.scss';
import Input from '../../components/input/Input';

export default function Login(props: any) {

  const [data, setData] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(false);
  const [errors, setErrors] = useState([]);

  async function onSubmit() {
    setLoading(true);
    setErrors([]);
    const result = await loginUser(data.username, data.password);
    console.log(result);

    if(!result.success) {
      setErrors(result.result.errors);
    } else {
      setLogin(true);
    }
      setLoading(false);
  }

  function onChangeUsername(e: any){
    setData({
      ...data,
      username: e.target.value,
    });
  }

  function onChangePassword(e: any){
    setData({
      ...data,
      password: e.target.value,
    });
  }

  if (login) {
    return(
      <div className={'login__contents'}>
        <h1>Skráður inn</h1>
        <h3 className="register__success">Þú hefur skráð þig inn</h3>
        <Link to="/" className="register__linkToLogin">Versla vörur!</Link>
      </div>
    )
  }

  return (
    <div className = "login">
    <div className = "login__contents">
    <div className = "login__head">
        <h1>Innskráning</h1>
        {errors && (
              <div className={'errors'}>
                {errors && errors.map((error: any) => (
                  <p key={error.field} className={'errors__message'}>{error.field}, {error.error}</p>
                ))}
            </div>
        )}
      </div>
      <Input
        label={'Notendanafn:'}
        onChange={onChangeUsername}>
      </Input>

      <Input
        label={'Lykilorð:'}
        onChange={onChangePassword}>
      </Input>

      <Button
        onClick={onSubmit}
        >Skrá Inn
      </Button>

      <div className = "login__reg">
        <NavLink activeClassName="header__link--selected" exact to="/register">Nýskrá</NavLink>
      </div>
    </div>
    </div>
  )
}
