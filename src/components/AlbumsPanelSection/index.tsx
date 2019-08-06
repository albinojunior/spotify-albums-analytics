import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { ApplicationState } from '../../store';

import { Album } from '../../store/ducks/albums/types';
import ShadowCard from '../../components/ShadowCard';
import { loadAlbums } from '../../store/ducks/albums/actions';
import { artistIds } from "../../store/ducks/artists/sagas";

interface ReduxProps {
  albums: Album[];
}

interface DispatchProps {
  loadAlbums(artists: string[]): void;
}

type Props = ReduxProps & DispatchProps;

class AlbumsPanelSection extends Component<Props> {
  componentDidMount() {
    this.props.loadAlbums(artistIds);
  }

  render() {
    return (
      <ShadowCard title="Painel de Álbuns" content={() => <div className="albums-section" />} />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  albums: state.albums.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ loadAlbums }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumsPanelSection);
