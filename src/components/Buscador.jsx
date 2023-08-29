const Buscador = ({ setFiltro }) => {
  return (
    <>
    <div className="container">
    <h3>Buscador</h3>
    <input
        type="text"
        placeholder="Buscador"
        onChange={(e) => setFiltro(e.target.value) }
      />
    </div>
    </>
  )
}

export default Buscador