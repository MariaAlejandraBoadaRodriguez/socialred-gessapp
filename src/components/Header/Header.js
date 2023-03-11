import React from 'react'
import styles from './Header.css';

function Header() {
  const {
    header, 
  } = styles
  return (
    <header className={header} >
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/literacy">Literacy</a></li>
          <li><a href="/goodPractices">Good Practice</a></li>
          <li><a href="/learnedLessons">Learned lessons</a></li>
        </ul>
      </nav>
      <div className="logoContainer">
        <div className="circular">
          <img src="Logo.png" alt='logo' className="logo"/>
        </div>
        <p className="logoText">Gess App</p>
      </div>
      <div>
        <button className='button'>Iniciar sesión</button>
        <button className='button'>Registrarse</button>
      </div>
    </header>
  );
}

export default Header;
