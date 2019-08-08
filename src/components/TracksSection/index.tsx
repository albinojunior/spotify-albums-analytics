import React, { Component, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { ApplicationState } from '../../store';

import ShadowCard from '../../components/ShadowCard';
import TrackList from '../../components/TrackList';
import { loadTracks } from '../../store/ducks/tracks/actions';
import { Track } from '../../store/ducks/tracks/types';
import { Album } from '../../store/ducks/albums/types';
import Loader from '../Loader';

interface ReduxProps {
  tracks: Track[];
  albums: Album[];
  loading: boolean;
}

interface StateProps {
  filter: string;
}

interface DispatchProps {
  loadTracks(albumsIds: string[]): void;
}

type Props = ReduxProps & DispatchProps;

class TracksSection extends Component<Props, StateProps> {
  state = {
    filter: '',
  };

  componentWillReceiveProps(nextProps: Props) {
    const { albums } = nextProps;
    if (albums.length) {
      const ids = albums.map(album => album.id);
      this.props.loadTracks(ids);
    }
  }

  filterTracks(tracks: Track[], filter: string) {
    return tracks.filter(track => track.name.toLowerCase().indexOf(filter.toLowerCase()) > -1);
  }

  changeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  render() {
    const { tracks, loading } = this.props;
    const { filter } = this.state;

    if (loading) return <Loader />;
    if (!tracks.length) return <></>;

    const filteredTracks = this.filterTracks(tracks, filter);
    return (
      <ShadowCard
        title="Todas as músicas do artista"
        content={() => (
          <div className="tracks-section">
            <div className="filter-tracks">
              <div className="filter">
                <input
                  id="filter"
                  name="filter"
                  value={filter}
                  onChange={this.changeFilter}
                  placeholder="Buscar música"
                />
              </div>
            </div>
            <TrackList tracks={filteredTracks} />
          </div>
        )}
      />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  tracks: state.tracks.data,
  albums: state.albums.selecteds,
  loading: state.tracks.loading,
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ loadTracks }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TracksSection);
