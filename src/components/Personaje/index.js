import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import styles from './Personaje.module.css'


const Personaje = () => {
  const {id} = useParams()
  const [character, setCharacter] = useState({});

 useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
        setCharacter(data)
    })
    .catch(error => {
        console.error(error);
    })

  }, [])

  console.log(character)
   
  
  return (
    <>
     <div className={styles.content}>
        <div>
          <img className={styles.imgContent}
            src={character.image}
            alt="imagen character" 
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.text}> Nombre : <span>{character.name}</span></h2>
          <p className={styles.text}>Especie : <span>{character.species}</span> </p>
          <p className={styles.text}> Genero : <span>{character.gender}</span> </p>
          <p className={styles.text}> Estado : <span>{character.status}</span> </p>
          
        </div>
    </div>
    </>
  )
}

export default  Personaje