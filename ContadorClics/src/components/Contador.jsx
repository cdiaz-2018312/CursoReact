import {React,useState} from 'react'
import '../stylesheets/contador.css'
const Contador = (props) => {
  return (
    <div className='contador'>
        {props.numClics}
    </div>
  )
}

export default Contador
