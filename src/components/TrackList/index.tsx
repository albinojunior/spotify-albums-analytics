import React from 'react';
import { Track } from "../../store/ducks/tracks/types";
import TrackCard from "../TrackCard";

interface Props {
  tracks: Track[];
  showInfo: boolean;
}

const TrackList = ({ tracks,  showInfo }: Props) => (
  <div className="track-list">
      {tracks.map(track => (
          <TrackCard {...track}/>
      ))}
  </div>
);

export default TrackList;
