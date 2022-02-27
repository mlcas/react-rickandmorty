import React from 'react';
import { Link } from "react-router-dom";

import styles from './Header.module.css'

const Header = ({cargarMasHandler}) => {

  return (
    
    <header className={styles.header}>
      <div>
      <nav className={styles.mainnavbar}>
        <ul >
          <li>
          <Link  className={styles.navbar} to="/" >
          <span className={styles.textNavbar} >Inicio</span>
          </Link>
            </li>
        </ul>
      </nav>
    </div>
      
    <div className={styles.headerTexto}>
      <h2 className={styles.noMargin}>Rick and Morty</h2>
    </div>
   
    <div className={styles.buttonContent}  >
          <button className={styles.button}  onClick={cargarMasHandler}>Next Page</button>
      </div>
   
   </header>
   
  )
}

export default Header