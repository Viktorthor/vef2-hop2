import React from 'react';

import './Login.scss';

export default function Login() {
  return (
    <div className = "login">
    <div className = "login__contents">
      <div className = "login__username">
        Notendanafn: <input type="text" name="username"/>
      </div>

      <div className = "login__password">
        Lykilorð: <input type="password" name="password"/>
      </div>

      <div className = "login__takki">
        <button type="button">Skrá inn</button>
      </div>
    </div>
    </div>
  )
}
