import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
// import { colaboradores } from '../Colaboradores'
import { Form, Row } from 'react-bootstrap'
// import Form from 'react-bootstrap/Form'

const Formulario = ({ setBaseDatos, baseDatos, setAlert }) => {
  // const [baseDatos, setBaseDatos] = useState(colaboradores)
  // const [nombre, setNombre] = useState('')
  // const [correo, setCorreo] = useState('')
  const [input, setInput] = useState({nombre: '', correo: '', edad: '', cargo: '', telefono: ''})

  const capturarInput = (e) => {
    setInput({...input, [e.target.name]: e.target.value, [e.target.correo]: e.target.value, [e.target.edad]: e.target.value, [e.target.cargo]: e.target.value, [e.target.telefono]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (e.target.name === '' || e.target.correo === '' || e.target.edad === '' || e.target.cargo === '' || e.target.telefono === '' ) {
      setAlert({
        error: true,
        msg: 'Se deben llenar todos los campos',
        color: 'danger'
      })
      return;
    }

    setBaseDatos([...baseDatos, input])
    
    setAlert({
      error: false,
      msg: 'Información agregada',
      color: 'success'
    })

    setInput('')
  }

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input onChange={capturarInput} name='nombre' key='nombre' placeholder='nombre'></input>
        <input onChange={capturarInput} name='correo' key='correo' placeholder='correo'></input>
        <input onChange={capturarInput}  name='edad' placeholder='edad'></input>
        <input onChange={capturarInput}  name='cargo' placeholder='cargo'></input>
        <input onChange={capturarInput}  name='telefono' placeholder='telefono'></input>
        <Button type='submit' variant='primary' >Agregar</Button>
      </form>

    </div>
  )
}

export default Formulario