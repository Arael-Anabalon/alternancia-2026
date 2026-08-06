import { useState } from "react";

function FormularioVideojuego({ onGuardar }) {
  const [titulo, setTitulo] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [genero, setGenero] = useState("");
  const [precio, setPrecio] = useState("");

  async function manejarEnvio(evento) {
    evento.preventDefault();
    
    const nuevoVideojuego = {
      titulo: titulo, 
      precio: Number(precio),
      genero: genero,
      plataforma: plataforma
    };

    const guardado = await onGuardar(nuevoVideojuego);
    
    if (guardado) {
      setTitulo("");
      setPlataforma("");
      setGenero("");
      setPrecio("");
      alert("Videojuego añadido exitosamente!");
    }
  }

  return (
    <form className="vj-form" onSubmit={manejarEnvio}>
      <h3 className="vj-form-title">Agregar Nuevo Videojuego</h3>
      <div className="vj-form-grid">
        <input 
          className="vj-input" 
          type="text" 
          placeholder="Nombre / Título" 
          value={titulo} 
          onChange={(evento) => setTitulo(evento.target.value)} 
          required 
        />
        <input 
          className="vj-input" 
          type="text" 
          placeholder="Género" 
          value={genero} 
          onChange={(evento) => setGenero(evento.target.value)} 
          required 
        />
        <input 
          className="vj-input" 
          type="text" 
          placeholder="Plataforma" 
          value={plataforma} 
          onChange={(evento) => setPlataforma(evento.target.value)} 
          required 
        />
        <input 
          className="vj-input" 
          type="number" 
          placeholder="Precio ($)" 
          min="0" 
          value={precio} 
          onChange={(evento) => setPrecio(evento.target.value)} 
          required 
        />
      </div>
      <button className="vj-btn-submit" type="submit">Agregar Videojuego</button>
    </form>
  );
}

export default FormularioVideojuego;