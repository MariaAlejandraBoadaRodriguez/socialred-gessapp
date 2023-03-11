import React from 'react';
import styles from './Login.css';

function Login() {
    const { 
    } = styles
  return (
    <form className="login-form">
      <h2>Iniciar sesión</h2>
      <div className="form-group">
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

export default Login;