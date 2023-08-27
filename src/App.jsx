import { useState } from 'react'

import { colaboradores } from './Colaboradores.js'

import Formulario from './components/Formulario'
import Listado from './components/Listado'
import Alert from './components/Alert'
// import Buscador from './components/Buscador'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// 

function App() {
  // const [count, setCount] = useState(0)
  const [datos, setDatos] = useState(colaboradores)

  const [alert, setAlert] = useState({error: '', msg: '', color:''})

  console.log('mostrando datos en la consola ', datos)

  const mostrarDatos = (dato) => {
    console.log('mostrando código', dato)
    setDatos([...datos, {nombre: dato.nombre}])
  }

  const enviarFormulario = ({nombre}) => {
    console.log('estomao dentro de la función enviarFormulario')
  }

  // const data = 'documentos'



  return (
    <>
      <div>
        <Listado datos={datos} />
        {/* <Formulario onSubmit={enviarFormulario} setAlert={setAlert} /> */}
        <Formulario />
        {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
        {/* <Buscador /> */}
        {/* <Alert /> */}
      </div>
      {/* <div className="card"> */}
        {/* <button onClick={() => setCount((count) => count + 1)}> */}
          {/* count is {count} */}
        {/* </button> */}
      {/* </div> */}
    </>
  )
}

export default App
