import Header from './components/Header';
import React, { useState, useEffect } from "react";
import {  Route, Routes} from "react-router-dom";
import PersonajesInDb from './components/PersonajesInDb';
import Personaje from './components/Personaje';
import Error from './components/Error';


function App() {
  const [personajes, setPersonajes] = useState([]);
 const [pagina, setPagina] = useState(1);

 useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      
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
     
        setPersonajes(data.results)
    })

  }
  return (
    <>
  <Header
    cargarMasHandler={cargarMasHandler}
  />
  <Routes>
     <Route  path='/personaje/:id' element={<Personaje/>} />
     <Route  path="/" element= {<PersonajesInDb  personajes={personajes}/>} />
     <Route  path="*" element= {<Error/>} />
     </Routes>
 
  
  </>
  )
}

export default App;
