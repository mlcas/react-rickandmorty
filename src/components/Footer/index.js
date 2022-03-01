import React from 'react';
import styles from  './Footer.module.css'

const Footer = () => {
  return (
    <footer>
    <div className={styles.footer}>
      <div className={styles.piedepagina}>
        <section className={styles.footertop}>
         <a className={styles.footerlogin} href="https://www.linkedin.com/in/m-l-castro/"><h3 className={styles.footerh3}> Mi Perfil de LinkedIn</h3></a>
          <a className={styles.footerlogin} href="https://github.com/mlcas?tab=repositories"><h3>Mis Proyectos</h3></a>
        </section>

        <section className={styles.footerbotton}>
          <a className={styles.footerlogin} href="/sobreNosotros"><h3>Acerca de Mi</h3></a>
        </section>
      </div>
     
    
    </div>

  </footer>
  )
}

export default Footer