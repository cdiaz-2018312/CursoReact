import React from 'react'
import '../stylesheets/botonEstilo.css'
const Boton = ({texto,esBotonDeClick,manejarClick}) => {
    
    
return (
    <button className={ esBotonDeClick ? 'boton-clic':'boton-reiniciar' }
    onClick={manejarClick}>
        {texto}
    </button>
  )
}

export default Boton
