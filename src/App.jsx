import { useState } from 'react'
import  colaboradores  from './Colaboradores'
import Formulario from './components/Formulario'
import Listado from './components/Listado.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [datos, setDatos] = useState(colaboradores)
  console.log('objeto de datos ' + datos)

  const mostrarDatos = () => {
    console.log(datos)
  }

  let lista = datos.map(dato => {dato.id})
  console.log(lista)

  return (
    <>
      <div>
        <Listado {mostrarDatos} />
        <Formulario />
        {/* <Buscador /> */}
        {/* <Alert /> */}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
