import React from 'react'
import '../hojas-de-estilo/style.css'
function Testimonio(props){
  return (
     <div className='contenedor-testimonio'>
        <img className='imagen-testimonio'
        src={require(`../images/${props.foto}.jpg`)}
        alt='bonnie foto'/>
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'><strong>{props.nombre}</strong></p>
          <p className='lugar-camara'> ({props.lugar})</p>
          <p className='descripcion'>{props.descripcion}</p>
       </div>
     </div>
  );
}

export default Testimonio
