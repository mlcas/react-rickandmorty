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
          <a className={styles.footerlogin} href="/sobreNosotros"><h3>ACERCA DE APOLO</h3></a>
        </section>
      </div>
     
      <section className={styles.privacity}>
        <div>
          <span className={styles.bloque}>Argentina</span>
        
          <span className={styles.bloque}>2021 Apolo, Inc. Todos los derechos reservados</span>
        </div>
        <div>
          <span className={styles.bloque}>Terminos de uso</span>
         
          <span classNameName={styles.bloque}>Politica de Privacidad</span>
        </div>
      </section>
    </div>

  </footer>
  )
}

export default Footer