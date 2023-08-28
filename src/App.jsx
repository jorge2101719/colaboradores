import { useState } from 'react'

import { colaboradores } from './Colaboradores.js'

import Formulario from './components/Formulario'
import Listado from './components/Listado'
import Alert from './components/Alert'
import Buscador from './components/Buscador'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [baseDatos, setBaseDatos] = useState(colaboradores)

  const [alert, setAlert] = useState({error: '', msg: '', color:''})

  // const enviarFormulario = (nombre, correo) => {
    // let largo = baseDatos.length;
    // largo++;
    // setBaseDatos([...baseDatos, {id: largo, nombre: nombre, correo: correo }])
  // }

  return (
    <>
      <div>
        <Buscador datos={baseDatos} />
        <Listado datos={baseDatos} />

        <Formulario  baseDatos={baseDatos} setBaseDatos={setBaseDatos} setAlert={setAlert} />
        {alert.msg && <Alert color={alert.color}>{alert.msg} </Alert> }
      </div>
    </>
  )
}

export default App
