import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
// import { colaboradores } from '../Colaboradores'
import { Form, Row } from 'react-bootstrap'
// import Form from 'react-bootstrap/Form'

const Formulario = ({ agregar, setAlert }) => {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [edad, setEdad] = useState('')
  const [cargo, setCargo] = useState('')
  const [telefono, setTelefono] = useState('')

  const enviarDatos = (e) => {
    e.preventDefault()

    if (nombre === '' || correo === '' || edad === '' || cargo === '' || telefono === '' ) {
      setAlert({
        error: true,
        msg: 'Se deben llenar todos los campos',
        color: 'danger'
      })
      return;
    }

    let id=3
    id++

    agregar(id, nombre, correo, edad, cargo, telefono)

    setAlert({
      error: false,
      msg: 'Información agregada',
      color: 'success'
    })

    setNombre('')
    setCorreo('')
    setEdad('')
    setCargo('')
    setTelefono('')


  }

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={(e) => enviarDatos(e)}>
        <input onChange={(e) => setNombre(e.target.value)} name='nombre' key='nombre' placeholder='nombre'></input>
        <input onChange={(e) => setCorreo(e.target.value)} name='correo' key='correo' placeholder='correo'></input>
        <input onChange={(e) => setEdad(e.target.value)}  name='edad' placeholder='edad'></input>
        <input onChange={(e) => setCargo(e.target.value)}  name='cargo' placeholder='cargo'></input>
        <input onChange={(e) => setTelefono(e.target.value)}  name='telefono' placeholder='telefono'></input>
        <Button type='submit' variant='primary' >Agregar</Button>
      </form>

    </div>
  )
}

export default Formulario