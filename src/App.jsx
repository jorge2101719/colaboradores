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
  const [filtro, setFiltro] = useState('')
  const [alert, setAlert] = useState({error: '', msg: '', color:''})

  const agregar = (nombre, correo, edad, cargo, telefono) => {
    setBaseDatos([...baseDatos, {nombre: nombre, correo: correo, edad: edad, cargo: cargo, telefono: telefono }])
  }

  const filtrados = baseDatos.filter((datoCol) => {
    return (
      datoCol.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
      datoCol.correo.toLowerCase().includes(filtro.toLowerCase()) ||
      datoCol.edad.toLowerCase().includes(filtro.toLowerCase()) ||
      datoCol.cargo.toLowerCase().includes(filtro.toLowerCase()) ||
      datoCol.telefono.toLowerCase().includes(filtro.toLowerCase())
  )})

  return (
    <>
      <div className='contenedor'>
        <Buscador setFiltro={setFiltro} />

        <div className='m-5 subcontenedor'>
          <Listado datos={filtrados} />

          <Formulario  agregar={agregar} setAlert={setAlert} />
        </div>
        
        {alert.msg && <Alert color={alert.color}>{alert.msg} </Alert> }
      </div>
    </>
  )
}

export default App
