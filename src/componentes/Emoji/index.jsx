import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

function Emoji() {
  const { name } = useParams(); // name es el slug
  const [emojiData, setEmojiData] = useState({});

  useEffect(() => {
    const obtenerEmoji = async () => {
      try {
        const res = await fetch(`https://emoji-api.com/emojis?access_key=7df704bf63a705186fc03df84deb8f82c4c90aeb`);
        const json = await res.json();
        const emojiEncontrado = json.find(emoji => emoji.slug === name);
        setEmojiData(emojiEncontrado || {});
      } catch (error) {
        console.error('Error al obtener el emoji:', error);
      }
    };

    obtenerEmoji();
  }, [name]);

  if (!emojiData.character) return <p>Cargando...</p>;

  return (
    <div className="emoji-detail">
      <p style={{ fontSize: '100px' }}>{emojiData.character}</p>
      <p>Nombre: {emojiData.unicodeName}</p>
      <p>Grupo: {emojiData.group}</p>
      <p>CodePoint: {emojiData.codePoint}</p>
    </div>
  );
}

export default Emoji;
