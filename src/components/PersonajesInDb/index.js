
import { Link } from "react-router-dom";
 import styles from './PersonajesInDb.module.css'




const PersonajesInDb = ({personajes}) => {
  

 
  return (
    <>
    <div className={styles.content}>
      
         {
             personajes.map((personaje)=>{
                return <div className={styles.contenedor} key={personaje.id} >
                  
                          <div>
                            <p  className={styles.text} >{personaje.name}</p> 
                          </div>
                          <Link to={`/personaje/${personaje.id}`}>
                          <div>
                              <img className={styles.img}  src={personaje.image}  alt="image" />
                          </div> 
                         </Link>


                </div>  
                   })
          }
        
  </div>
  
  </>
  )
}

export default PersonajesInDb