import React from 'react'
import Table from 'react-bootstrap/Table'

const Listado = ({ datos }) => {
  console.log('ahora estamos dentro del componente Listado')
  const listaDeDatos = datos.map((dato) => 
    <tr key={dato.id}>
      <td>{dato.nombre}</td>
      <td>{dato.correo}</td>
      <td>{dato.edad}</td>
      <td>{dato.cargo}</td>
      <td>{dato.telefono}</td>
    </tr>
  )

  return (
    <div>
      <h1>Listado</h1>
      <Table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
          </tr>
        </thead>
        
        <tbody>
          {listaDeDatos}
        </tbody>
      </Table>
    </div>
  )
}

export default Listado
