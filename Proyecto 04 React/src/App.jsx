import { useState } from 'react';
import Formulario from './components/Formulario';
import Dado from './components/Dado';

const App = () => {
  // Estado para guardar los datos del jugador cuando se envíe el formulario
  const [jugador, setJugador] = useState(null);

  return (
    <div>
      {/* formulario es el componente hijo*/}
      <Formulario onGuardarJugador={setJugador} />
      {/*onGuardarJugador es el nombre del prop todo esto es un props */}
      {/* {setJugador} es lo qe le mandamos al formulario 
      para qe nos pase los datos del jugador */}

      {/* los datos qe mostraremos en pantalla*/}
      {jugador && (
        <div>
          <h2>Datos del jugador</h2>
          <p>Nombre: {jugador.nombre}</p>
          <p>Apellido: {jugador.apellido}</p>
          <p>Edad: {jugador.edad}</p>



            {/*reiniciamos el dado para un nuevio jugador */}
          <Dado key={`${jugador.nombre}-${jugador.apellido}`} /> 
          
        </div>
      )}





      
      
    </div>
  );
};

export default App;