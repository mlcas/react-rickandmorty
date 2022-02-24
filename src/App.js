import Header from './components/Header';
import React, { useState, useEffect } from "react";
import PersonajesInDb from './components/PersonajesInDb'


function App() {
  const [personajes, setPersonajes] = useState([]);
 const [pagina, setPagina] = useState(1);

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

  const cargarMasHandler = async () => {
    await setPagina(prevState => prevState + 1);
    fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
        setPersonajes(data.results)
    })

  }
  return (
    <>
  <Header
    cargarMasHandler={cargarMasHandler}
  />
 
  <PersonajesInDb
    personajes={personajes}
  />
  </>
  )
}

export default App;
