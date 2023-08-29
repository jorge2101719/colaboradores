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

  const agregar = (id, nombre, correo, edad, cargo, telefono) => {
    setBaseDatos([...baseDatos, {id: id, nombre: nombre, correo: correo, edad: edad, cargo: cargo, telefono: telefono }])
  }

  const filtrados = baseDatos.filter((col) => {
    return (
      col.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
      col.correo.toLowerCase().includes(filtro.toLowerCase()) ||
      col.edad.toLowerCase().includes(filtro.toLowerCase()) ||
      col.cargo.toLowerCase().includes(filtro.toLowerCase()) ||
      col.telefono.toLowerCase().includes(filtro.toLowerCase())
  )})

  return (
    <>
      <div>
        <Buscador setFiltro={setFiltro} />
        <Listado datos={filtrados} />

        <Formulario  agregar={agregar} setAlert={setAlert} />
        {alert.msg && <Alert color={alert.color}>{alert.msg} </Alert> }
      </div>
    </>
  )
}

export default App
