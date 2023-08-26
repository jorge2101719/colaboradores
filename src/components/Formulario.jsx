import React from 'react'

function Formulario () {
  return (
    <div>
      <h1>Formulario</h1>
      <form onClick={submit}>
        <input></input>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Formulario