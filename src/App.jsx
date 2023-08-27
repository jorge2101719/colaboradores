import { useState } from 'react'

import { colaboradores } from './Colaboradores.js'

// import Formulario from './components/Formulario'
import Listado from './components/Listado'
// import Alert from './components/Alert'
// import Buscador from './components/Buscador'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// 

function App() {
  const [count, setCount] = useState(0)
  const [datos, setDatos] = useState(colaboradores)

  const [alert, setAlert] = useState({error: '', msg: '', color:''})

  console.log('valores del arreglo en App.jsx', datos)

  const mostrarDatos = (dato) => {
    console.log('mostrando código', dato)
    setDatos([...datos, {id: id, nombre: nombre}])
  }

  // const data = 'documentos'



  return (
    <>
      <div>
        <Listadp datos={datos} />
        {/* <Formulario onClick={() => funcionPadreAHijo()} /> */}
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
