import React from 'react'

const Personajes = (props) => {
  return (
    <>
    <div>
      <div>
       <img  src={props.image}  alt="image" />
       </div>
       <div>
      <p>{props.name}</p> 
      </div>
     
    </div>
    </>
  )
}

export default Personajes