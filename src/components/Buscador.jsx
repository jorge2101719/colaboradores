import { useState} from 'react'
// import Button from 'react-bootstrap/Button'

const Buscador = ({ datos }) => {
  const [input, setInput] = useState('')
  const [mensaje, setMensaje] = useState('')
//   const [datos, setDatos] = useState(baseDatos)
//   console.log('estos son los datos', datos)

  let estiloPropio = {
    backgroundColor: 'yellow',
    margin: '2%',
    padding: '2%',
    width: '50%',
    align: 'center'
  }

  const capturarInput = (e) => {
    setInput(e.target.value)
    // console.log('ahora el input capturado es', input)
    if(input === datos.nombre || input === datos.correo || input === datos.edad || input === datos.cargo || input === datos.telefono) {
        console.log('el dato existe', datos.nombre)
        setMensaje('Búsqueda exitosa ')
    }
    setInput('')
  }

  const buscarInput = (e) => {
    e.preventDefault()
    setInput(e.target.value)  
  }

  return (
    <>
      <div className="container">
        <h1>Buscador</h1>
        <form onSubmit={buscarInput}>
          <input onChange={capturarInput}></input>
          <button>Buscar</button>
        </form>
        <div style={estiloPropio}>
          Estamos buscando: <span>{input}</span>
        </div>
        <div>{}</div>
      </div>
    </>
  )
}

export default Buscador