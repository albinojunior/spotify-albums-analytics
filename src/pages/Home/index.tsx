import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { ApplicationState } from '../../store';

import { loadArtists } from '../../store/ducks/artists/actions';
import { loadAlbums } from '../../store/ducks/albums/actions';
import { Artist } from '../../store/ducks/artists/types';

interface StateProps {
  artists: Artist[];
}

interface DispatchProps {
  loadArtists(): void;
  loadAlbums(artists: Artist[]): void;
}

type Props = StateProps & DispatchProps;
class Home extends Component<Props> {
  componentDidMount() {
    const { loadArtists } = this.props;
    loadArtists();
  }

  componentDidUpdate() {
    const { loadAlbums, artists } = this.props;
    loadAlbums(artists);
  }

  render() {
    return <></>;
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  artists: state.artists.data,
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ loadArtists, loadAlbums }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
