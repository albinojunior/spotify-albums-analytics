import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { ApplicationState } from '../../store';

import ShadowCard from '../../components/ShadowCard';
import TrackList from '../../components/TrackList';
import { loadTopTracks } from '../../store/ducks/tracks/actions';
import { artistIds } from '../../store/ducks/artists/sagas';
import { Track } from '../../store/ducks/tracks/types';

interface ReduxProps {
  tracks: Track[];
  toptracks: Track[];
}

interface DispatchProps {
  loadTopTracks(artists: string[]): void;
}

type Props = ReduxProps & DispatchProps;

class TracksSection extends Component<Props> {
  componentDidMount() {
    this.props.loadTopTracks(artistIds);
  }

  render() {
    const { tracks, toptracks } = this.props;
    return (
      <ShadowCard
        title="Todas as músicas do(s) artista(s)"
        content={() => (
          <div className="tracks-section">
            <TrackList tracks={toptracks} showInfo={false}/>
          </div>
        )}
      />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  tracks: state.tracks.data,
  toptracks: state.tracks.toptracks
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ loadTopTracks }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TracksSection);
