import React, { Fragment } from 'react';
import { Track } from '../../store/ducks/tracks/types';
import TrackCard from '../TrackCard';

interface Props {
  tracks: Track[];
}

const TrackList = ({ tracks }: Props) => (
  <div className="track-list">
    {tracks.map(track => (
      <Fragment key={track.name}>
        <TrackCard {...track} />
      </Fragment>
    ))}
  </div>
);

export default TrackList;
