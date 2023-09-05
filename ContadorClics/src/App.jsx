import {React , useState} from 'react';
import './App.css';
import reactLogo from  './images/logo192.png'
import Boton from './components/Boton';
import Contador from './components/Contador';

function App() {
  const [numClics,setNumClics] = useState(0);

  const manejarClick = () => {
    setNumClics(numClics+1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }
  const manejarClickResta = () => {
    setNumClics(numClics == 0 ? 0 :(numClics-1) );
  }

  return (
    <div className="App">
        <div className='logo-container'>
          <img className='react-logo'
          src={reactLogo}
          alt='Logo de react'/>
        </div>
        <div className='main-container'>

            <Contador numClics={numClics}/>
           
            <Boton 
            texto="click"
            esBotonDeClick={true}
            manejarClick={manejarClick}>
            </Boton>

            <Boton
            texto='Restar'
            esBotonDeClick={true}
            manejarClick={manejarClickResta}>
            </Boton>

            <Boton
            texto='Reiniciar'
            esBotonDeClick={false}
            manejarClick={reiniciarContador}>
            </Boton>
        </div>
    </div>
  );
}

export default App;
