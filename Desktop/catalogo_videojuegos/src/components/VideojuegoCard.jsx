function VideojuegoCard({ videojuego, onEliminar }) {
    return (
      <article className="vj-card">
        <h2 className="vj-card-title">{videojuego.nombre || videojuego.titulo}</h2>
        <div className="vj-card-info">
          <p>Título: <strong>{videojuego.titulo}</strong></p>
          <p>Género: <strong>{videojuego.genero}</strong></p>
          <p>Plataforma: <strong>{videojuego.plataforma}</strong></p>
          <p>Precio: <strong className="vj-price">${videojuego.precio}</strong></p>
        </div>
        <button 
          className="vj-btn-delete" 
          type="button" 
          onClick={() => onEliminar(videojuego)}
        >
          Eliminar
        </button>
      </article>
    );
  }
  
  export default VideojuegoCard;