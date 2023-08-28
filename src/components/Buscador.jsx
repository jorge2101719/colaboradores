import { useState} from 'react'
import Button from 'react-bootstrap/Button'

const Buscador = ({ datos }) => {
  const [input, setInput] = useState('')

  let estiloPropio = {
    backgroundColor: 'yellow',
    margin: '2%',
    padding: '2%',
    width: '50%',
    align: 'center'
  }

  function handler(e) {
    e.preventDefault()
    // console.log('esta es la función handler', e.target.value)
    // let datoIngresado = e.target.value
    setInput(e.target.value)
  }

  function buscar(e) {
    e.preventDefault()
    console.log('esta es la función buscar')

    if(e.target.value === datos.nombre) {
        console.log('busqueda éxitosa')
    }
  }

  return (
    <>
      <div className="container">
        <h1>Buscador</h1>
        <input onChange={(e) => handler(e)} ></input>
        <Button onClick={(e) => buscar(e)} >Buscar</Button>
        <div style={estiloPropio}>
          Estamos buscando: <span>{input}</span>
        </div>
      </div>
    </>
  )
}

export default Buscador