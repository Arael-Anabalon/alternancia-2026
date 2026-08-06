import { useEffect, useState } from "react"
import VideojuegoCard from "./components/VideojuegoCard"
import FormularioVideojuego from "./components/FormularioVideojuego"
import "./App.css"

const API_URL = "http://localhost:8000"

function App() {
  // 1. Usamos 'videojuegos' en plural y minúscula para evitar confusiones
  const [videojuegos, setVideojuegos] = useState([])

  useEffect(() => {
    cargarVideojuegos()
  }, [])

  async function cargarVideojuegos() {
    try {
      // 2. Asegúrate de que tu endpoint en FastAPI sea /videojuegos o /Videojuego según tu backend
      const respuesta = await fetch(`${API_URL}/videojuegos`)
      if (!respuesta.ok) throw new Error("No fue posible obtener los videojuegos")
      const datos = await respuesta.json()
      setVideojuegos(datos)
    } catch (error) {
      alert(error.message)
    }
  }

  async function guardarVideojuego(nuevoVideojuego) {
    try {
      const respuesta = await fetch(
        `${API_URL}/videojuegos`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(nuevoVideojuego)
        }
      )
      if (!respuesta.ok) throw new Error("No fue posible registrar el videojuego")
      await cargarVideojuegos()
      return true
    } catch (error) {
      alert(error.message)
      return false
    }
  }

  async function eliminarVideojuego(videojuego) {
    try {
      // 3. Corregido: Usamos el parámetro 'videojuego.id' en minúscula
      const respuesta = await fetch(
        `${API_URL}/videojuegos/${videojuego.id}`,
        {
          method: "DELETE"
        }
      )
      if (!respuesta.ok) throw new Error("No fue posible eliminar el videojuego")
      await cargarVideojuegos()        
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <main className="contenedor">
      <h1>Videojuegos</h1>

      <FormularioVideojuego onGuardar={guardarVideojuego} />
      
      <section className="videojuegos">
        {
          // 4. Corregido: Ahora recorre el estado correcto 'videojuegos'
          videojuegos.map(videojuegoLista => (
            <VideojuegoCard 
              videojuego={videojuegoLista} 
              key={videojuegoLista.id} 
              onEliminar={eliminarVideojuego}
            />
          ))
        }
      </section>
    </main>
  )
}

export default App
