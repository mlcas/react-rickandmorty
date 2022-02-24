 import styles from './PersonajesInDb.module.css'

import Personajes from '../Personajes'

const PersonajesInDb = ({personajes}) => {
 
  return (
    <>
    <div className={styles.content}>

         {
             personajes.map((personaje)=>{
                return <Personajes name={personaje.name} image={personaje.image} key={personaje.id} />
                   })
          }
  </div>
  
  </>
  )
}

export default PersonajesInDb