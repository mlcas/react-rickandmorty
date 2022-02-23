
import React, { useState, useEffect } from "react";
import Personajes from '../Personajes'

const PersonajesInDb = () => {
 const [personajes, setPersonajes] = useState([]);

 useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      console.log(data);
        setPersonajes(data.results)
    })
    .catch(error => {
        console.error(error);
    })

  }, [])
  return (
    <div >

         {
             personajes.map((personaje,index)=>{
                return <Personajes name={personaje.name} image={personaje.image} key={index} />
                   })
          }
  </div>
  )
}

export default PersonajesInDb