import "./index.scss";

const CharacterCard = ({
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image,
  episode,
  url,
  created,
}) => {
  return (
    <div className="characterCard">
      <div className="characterCard-image">
        <img src={image} alt={name} />
      </div>
      <div className="characterCard-content">
        <div className="section">
          <a href={url} target="_blank" rel="noreferrer">
            <h2>{name}</h2>
          </a>
          <span className="status">
            {status} - {species}
            <span className="status_icon"></span>
          </span>
          <br></br>
        </div>
        <div className="section">
          <span className="gray-text"> Last known location: </span>
          <a
            href={location.name}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            {location.name}{" "}
          </a>
        </div>
        <div className="section">
          <span className="gray-text"> First seen in: </span>
          <a href={episode} target="_blank" rel="noreferrer" className="link">
            {episode}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
