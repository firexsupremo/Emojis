

function Filtro({ onTipoChange, tipoSeleccionado }) {
  const tipos = [
    "All",
    "smileys",
    "animals",
    "foods",
    "objects",
    "symbols",
    "flags"
  ];

  return (
    <div className="c-filtro">
      {tipos.map((tipo) => (
        <button
          key={tipo}
          onClick={() => onTipoChange(tipo)}
          className={`c-filtro-boton ${tipoSeleccionado === tipo ? 'activo' : ''}`}
        >
          {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default Filtro;
