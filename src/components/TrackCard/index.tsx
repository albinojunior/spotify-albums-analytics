import React from 'react';
import { Track } from '../../store/ducks/tracks/types';

const TrackCard = ({
  name,
  disc_number,
  explicit,
  popularity,
  preview_url,
  track_number,
  album,
}: Track) => (
  <div className="track">
    <div className="name">{name}</div>
  </div>
);

export default TrackCard;
