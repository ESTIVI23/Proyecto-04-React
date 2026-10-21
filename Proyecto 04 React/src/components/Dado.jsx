import { useState } from 'react';

const Dado = () => {
  // la varible dado 
  const [dado, setDado] = useState(1);

 
  const emojisDados = ["1", "2", "3", "4", "5", "6"];

  // la funcion para lanzar el dado
  const lanzarDado = () => {
    const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
    setDado(numeroAleatorio);
  };




  // con esta funcion obtenemos el mensaje 
  const obtenerMensaje = (numero) => {
    if (numero === 1) {
      return "Mala suerte, sacaste 1";
    }

    if (numero === 6) {
      return "¡FELICIDADES! ¡Sacaste el mayor!";
    }

    return "¡Buen tiro!";
  };

 // llama a la funcion obtenerMensaje y le pasamo  el valor del dado
 //  para que se ejecuete en la fucnion 
 // y luego obtengamos el mensaje para mostar en pantalla 
  const mensaje = obtenerMensaje(dado);




  
  return (
    //aqui es donde mostramos las cosas en pantalla
    <div>
        <h1>simulador de dado</h1>
      <h1>{emojisDados[dado - 1]}</h1>

      <h2>Te Toco: {dado}</h2>
      <p>{mensaje}</p>
      <button onClick={lanzarDado}> 
        
        Lanzar dado
      </button>

      
    </div>
  );
};

export default Dado;