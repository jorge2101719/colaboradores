import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'

const Formulario = ({onSubmit, setAlert}) => {
  const [datos, setDatos] = useState('')

  const capturarInput = (e) => {
    console.log('función capturarInput se activa con onChange')
    // setDatos(e.target.value)
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    console.log('dentro del formulario', datos, typeof datos)

    if (datos.nombre === '') {
      setAlert({
        error: true,
        msg: 'Debe llenar todos los campos',
        color: 'danger'
      })
      return
    }

    onSubmit(datos)

    setAlert({
      error: false,
      msg: 'Información agregada',
      color: 'success'
    })

    setDatos('')
  }

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={handlerSubmit}>
        <input onChange={capturarInput} name='nombre' placeholder='nombre'></input>
        <input onChange={capturarInput}  name='correo' placeholder='correo'></input>
        <input onChange={capturarInput}  name='edad' placeholder='edad'></input>
        <input onChange={capturarInput}  name='cargo' placeholder='cargo'></input>
        <input onChange={capturarInput}  name='telefono' placeholder='telefono'></input>
        <Button >Agregar</Button>
      </form>
    </div>
  )
}

export default Formulario