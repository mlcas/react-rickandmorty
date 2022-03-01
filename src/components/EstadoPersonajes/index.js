import React from 'react';
import PersonajesVivos from '../PersonajesVivos';
import styles from  './EstadoPersonajes.module.css'

const EstadoPersonajes = ({personajes}) => {

  const personajesVivos = personajes.filter((personaje) =>{
    return personaje.status !== "Dead" });
    console.log(personajesVivos)
 
 
  
 
  return (
  
    <div className={styles.content}>
    {
        personajesVivos.map((personaje)=>{
           return <PersonajesVivos
           name={personaje.name}
           image={personaje.image} 
           key={personaje.id} />
              })
     }
   
    </div>



  )
}

export default EstadoPersonajes