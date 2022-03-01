import React from 'react';
import styles from  './PersonajesVivos.module.css'

const PersonajesVivos = (props) => {
  return (
    <div className={styles.contenedor} >
      <div>
        <p  className={styles.text} >{props.name}</p> 
      </div>
      <div>
       <img className={styles.img}  src={props.image}  alt="image" />
      </div> 
      </div>
  )
}

export default PersonajesVivos