import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
// import { colaboradores } from '../Colaboradores'
// import { Form, Row } from 'react-bootstrap'
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

    agregar(nombre, correo, edad, cargo, telefono)

    setNombre('')
    setCorreo('')
    setEdad('')
    setCargo('')
    setTelefono('')
    setError(false)


    setAlert({
      error: false,
      msg: 'Información agregada',
      color: 'success'
    })
  }

  return (
    <div>
      <h1>Formulario</h1>

      <form onSubmit={(e) => enviarDatos(e)}>

        <input
          className='form-control'
          type='text'
          name='nombre'
          placeholder='nombre'
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
        
        <input
          className='form-control'
          type='email'
          name='correo'
          placeholder='correo'
          onChange={(e) => setCorreo(e.target.value)}
          value={correo}
        />
        
        <input
          className='form-control'
          type='number'
          name='edad'
          placeholder='edad'
          onChange={(e) => setEdad(e.target.value)}
          value={edad}
        />
        
        <input
          className='form-control'
          type='text'
          name='cargo'
          placeholder='cargo'
          onChange={(e) => setCargo(e.target.value)}
          value={cargo}
        />

        <input
          className='form-control'
          type="tel"
          name='telefono'
          placeholder='telefono'
          onChange={(e) => setTelefono(e.target.value)}
          value={telefono}
        />

        <Button type='submit' variant='primary' >Agregar</Button>
      </form>
    
    </div>
  )
}

export default Formulario