import Table from 'react-bootstrap/Table'

const Listado = ({ datos }) => {
  // console.log('ahora estamos dentro del componente Listado')
  
  return (
    <div>
      <h1>Listado</h1>
      <Table responsive striped bordered size='lg'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((dato) => 
          <tr key={dato.id}>
            <td>{dato.id}</td>
            <td>{dato.nombre}</td>
            <td>{dato.correo}</td>
            <td>{dato.edad}</td>
            <td>{dato.cargo}</td>
            <td>{dato.telefono}</td>
          </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default Listado
