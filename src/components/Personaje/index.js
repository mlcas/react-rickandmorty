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
          <h2 className={styles.text}>{character.name}</h2>
          <p className={styles.text}>{character.species}</p>
          <p className={styles.text}>{character.gender}</p>
        </div>
    </div>
    </>
  )
}

export default  Personaje