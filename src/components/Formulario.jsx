import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

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
      <Form onSubmit={handlerSubmit}>
        <Form.Group controlId="exampleFormControlTextarea1"></Form.Group>
        <Form.Group controlId="nombre">
          <Form.Control
            type='text'
            placeholder='Nombre'
            name='nombre'
            onChange={capturarInput}
            value={dato}
          ></Form.Control>
        </Form.Group>
        <Button >Agregar</Button>
      </Form>
    </div>
  )
}

export default Formulario