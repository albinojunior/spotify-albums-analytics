import React from "react";
import { Link } from "react-router-dom";
import { Track } from "../../store/ducks/tracks/types";

const getStNumber = (number: number) => (number < 10 ? `0${number}` : number);
const getPopularityTxt = (popularity: number): string => {
  let text = "Baixa";
  if (popularity > 35 && popularity <= 65) {
    text = "Media";
  } else if (popularity > 65) {
    text = "Alta";
  }
  return `${text} popularidade`;
};

const TrackCard = ({
  name,
  explicit,
  popularity,
  preview_url,
  track_number,
  album
}: Track) => (
  <div className="track-card">
    <Link to={`album/${album.id}`} target="_blank" rel="noopener noreferrer">
      <div className="track-content">
        <div className="track-header">
          <span className="disc-number">{`N° ${getStNumber(
            track_number
          )}`}</span>
          <span className="track-number">{`Track ${getStNumber(
            track_number
          )}`}</span>
        </div>
        <div className="track-body">
          <span className="track-name">{name}</span>
          <br />
          <small className="album-name">{album.name}</small>
        </div>
        <div className="track-footer">
          <span className="track-popularity">
            {getPopularityTxt(popularity)}
          </span>
          {explicit && <img src="assets/img/18.svg" alt="Conteudo Explícito" />}
        </div>
      </div>
    </Link>
  </div>
);

export default TrackCard;
