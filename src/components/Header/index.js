import React from 'react';

import styles from './Header.module.css'

const index = () => {
  return (
    <header className={styles.header}>
    <div className={styles.headerTexto}>
      <h2 className={styles.noMargin}>Rick and Morty</h2>
    </div>
   </header>
  )
}

export default index