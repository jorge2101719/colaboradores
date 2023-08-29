const Buscador = ({ setFiltro }) => {
  return (
    <>
    <div className="container">
    <input
        type="text"
        placeholder="Buscando..."
        onChange={(e) => setFiltro(e.target.value) }
      />
    </div>
    </>
  )
}

export default Buscador