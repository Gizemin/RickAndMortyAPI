import React, { useState, useEffect } from "react";
import { getCharacters } from "../../service/character";
import CharacterCard from "../../components/CharacterCard";

import "./index.scss";

const Character = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((response) => setCharacters(response.data));
  }, []);
  return (
    <div className="character">
      {characters.map((character) => (
        <CharacterCard {...character} />
      ))}
    </div>
  );
};

export default Character;
