import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { ApplicationState } from '../../store';

import { Album } from '../../store/ducks/albums/types';
import { selectAlbums } from '../../store/ducks/albums/actions';
import ShadowCard from '../ShadowCard';
import YearAlbumsChart, { buildChartData } from '../YearAlbumsChart';
import Loader from '../Loader';
import { ARTISTS } from '../../store/ducks/artists/types';

interface ReduxProps {
  albums: any;
  loading: boolean;
  selecteds: Album[];
  year?: string;
  artistId?: string;
}

interface DispatchProps {
  selectAlbums(albums: Album[], year: string): void;
}

type Props = ReduxProps & DispatchProps;

class AlbumsPanelSection extends Component<Props> {
  handleSelectYear = (year: string) => {
    const { albums, selectAlbums } = this.props;
    selectAlbums(albums[year], year);
  };

  getArtistColor(artistId: string | undefined): string | undefined {
    if (artistId) return ARTISTS.filter(artist => artist.id === artistId)[0].color;
  }

  render() {
    const {
 albums, loading, year, artistId,
} = this.props;

    return (
      <ShadowCard
        title="Painel de Álbuns"
        content={() => (
          <div className="albums-section">
            {loading ? (
              <Loader />
            ) : (
              <YearAlbumsChart
                data={buildChartData(albums)}
                color={this.getArtistColor(artistId)}
                currentYear={year}
                changeYear={this.handleSelectYear}
              />
            )}
          </div>
        )}
      />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  albums: state.albums.data,
  loading: state.albums.loading,
  selecteds: state.albums.selecteds,
  artistId: state.artists.selected,
  year: state.albums.year,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ selectAlbums }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumsPanelSection);
