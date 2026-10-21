import { useState } from "react";

const Formulario = ({ onGuardarJugador }) => {
  //  estados para cada campo del formulario
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");

  // es la Función para procesar y enviar los datos a app
  const procesarDatos = (e) => {
    e.preventDefault(); 

    // Armamos el objeto con los datos del jugador
    const jugadorInfo = {
      nombre: nombre.trim(),
      apellido: apellido.trim(),
      edad: edad.trim(),
    };

    //  esta es  funcion cuando el usuario precione el boton mande la info del jugador
    // a app a su setJugador
    onGuardarJugador(jugadorInfo);

    // limpiamos las const para que puedan agregar al siguiente jugador
    setNombre("");
    setApellido("");
    setEdad("");
  };

  return (
    <form onSubmit={procesarDatos}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          pattern="[A-Za-z áéíóúÁÉÍÓÚñÑ]+"
          placeholder="Escribí tu nombre"
          required
        />
      </div>

      <div>
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
         
          placeholder="Escribí tu Apellido"
          pattern="[A-Za-zÁÉÍÓÚáéíóúÜüÑñ\s]+"
          required
        />
      </div>

      <div>
        <label htmlFor="edad">Edad:</label>
        <input
          type="number"
          id="edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          placeholder="Escribí tu Edad"
          min="1"
          step="1"
          required
        />
      </div>

      <button type="submit">Guardar jugador</button>
    </form>
  );
};

export default Formulario;