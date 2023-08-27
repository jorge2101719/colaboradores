import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'

const Formulario = ({onSubmit, setAlert}) => {
  const [dato, setDato] = useState('')

  const capturarInput = (e) => {
    setDato(e.target.value)
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    console.log('dentro del formulario', dato, typeof dato)

    if (
      dato === ''
    ) {
      setAlert({
        error: true,
        msg: 'Debe llenar todos los campos',
        color: 'danger'
      })
      return
    }

    onSubmit(dato)

    setAlert({
      error: false,
      msg: 'Información agregada',
      color: 'success'
    })

    setDato('')
  }

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={handlerSubmit}>
        <input onChange={handlerSubmit} ></input>
        <Button >Agregar</Button>
      </form>
    </div>
  )
}

export default Formulario