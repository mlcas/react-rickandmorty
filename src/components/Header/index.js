import React from 'react';

import styles from './Header.module.css'

const Header = ({cargarMasHandler}) => {

  return (
    <header className={styles.header}>
       <div className={styles.buttonContent}  >
          <button className={styles.button}  onClick={cargarMasHandler}>Next Page</button>
      </div>
    <div className={styles.headerTexto}>
      <h2 className={styles.noMargin}>Rick and Morty</h2>
     
    </div>
   </header>
  )
}

export default Header