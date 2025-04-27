import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Filtro from '../Filtro'; // Si quieres filtros por grupo
import './style.css';

function Lista() {
  const [data, setData] = useState([]);
  const [tipoSeleccionado, setTipoSeleccionado] = useState('All');
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const res = await fetch('https://emoji-api.com/emojis?access_key=7df704bf63a705186fc03df84deb8f82c4c90aeb');
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error('Error al obtener emojis:', error);
      }
    };

    obtenerDatos();
  }, []);

  const handleTipoChange = (tipo) => {
    setTipoSeleccionado(tipo);
  };

  let resultados = data;

  if (tipoSeleccionado !== 'All') {
    resultados = resultados.filter(emoji => 
      emoji.group && emoji.group.toLowerCase().includes(tipoSeleccionado.toLowerCase())
    );
  }

  if (busqueda.length >= 3) {
    resultados = resultados.filter(emoji =>
      emoji.unicodeName && emoji.unicodeName.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  return (
    <>
      <input
        type="text"
        placeholder="Buscar Emoji"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="c-buscador"
      />
      <Filtro onTipoChange={handleTipoChange} />

      <section className="c-lista">
        {resultados.map((emoji, index) => (
          <div
            key={emoji.slug || index}
            className="c-lista-emoji"
            onClick={() => navigate(`/emoji/${emoji.slug}`)}
          >
            <p className="emoji-character">{emoji.character}</p>
            <p className="emoji-name">{emoji.unicodeName}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Lista;
