
import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className="App">
       <div className='contenedor-principal'>
          <h2>Carlos Eduardo Díaz Chacón</h2>
          <Testimonio 
          foto="freddy"
          nombre="Freddy"
          lugar="BackStage"
          descripcion="Freddy, el personaje principal de toda la franquicia de fnaf y el más querido por muchos un personaje que ha causado tambien bastante fobia y miedos respecto a sus variantes en los demas juegos." />
      
          <Testimonio 
          foto="chica"
          nombre="Chica"
          lugar="BathRooms"
          descripcion="Chica, una de los participantes de la banda de animatronicos que se caracteriza por ser un pollo y muy querida por Deimoss y tambien por speed por causar polemica entre estos fans xd." />

          <Testimonio 
          foto="bonnie"
          nombre="Bonnie"
          lugar="Parts And Service"
          descripcion="Bonnie, un animatronico con traje de conejo el cual es muy querido por los fans aunque gracias a security breach se conoce que su variante mas reciente fue destrozada por monty." />

          <Testimonio 
          foto="foxy"
          nombre="Foxy"
          lugar="The Pirate Cove"
          descripcion="Foxy, el animatronico con menos aparicion por lo menos en el primer juego y posteriormente siendo reemplazado por varios animatronicos a mi parecer el mas queirdo y extrañado." />
      </div>
    </div>
  );
}

export default App;
