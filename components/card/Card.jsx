import React from "react";
import style from "./Card.module.css"
//import style from "./components/Card.module.css"


export default function Card(props) {
   return (
      <div className={style.container}>
         <div className={style.buttonContainer}>
            <button onClick={props.onClose}>X</button>
         </div>
         
         <div className={style.dataContainer}>
            <h2>{props.name}</h2>
            <h2>{props.status}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
            <h2>{props.origin.name}</h2>
            <img src={props.image} alt='' />
         </div>
      </div>
   );
}

         
         
         




// name: nombre.
// status: status.
// species: especie.
// gender: género.
// origin: origen (ten en cuenta que el nombre del origen viene dentro de otra propiedad llamada name).
// image: imagen.