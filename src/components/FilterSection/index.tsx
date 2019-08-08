import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { ApplicationState } from "../../store";

import { loadArtists, selectArtist } from "../../store/ducks/artists/actions";
import { loadAlbums, selectAlbums } from "../../store/ducks/albums/actions";
import { ArtistsState } from "../../store/ducks/artists/types";
import ShadowCard from "../../components/ShadowCard";
import ArtistsSelect from "../../components/ArtistsSelect";
import PeriodField from "../../components/PeriodField";

import { ARTISTS } from "../../store/ducks/artists/types";
import { AlbumsState, Album } from "../../store/ducks/albums/types";

interface ReduxProps {
  artists: ArtistsState;
  albums: AlbumsState;
}

interface DispatchProps {
  loadArtists(): void;
  selectArtist(id: string): void;
  loadAlbums(artistId: string): void;
  selectAlbums(albums: Album[], year: string): void;
}

type Props = ReduxProps & DispatchProps;

class FilterSection extends Component<Props> {
  componentDidMount() {
    this.props.loadArtists();
  }

  handleSelect = (artistId: string) => {
    this.props.selectArtist(artistId);
    this.props.loadAlbums(artistId);
  };

  handleChangePeriod = (year: string) => {
    const { albums, selectAlbums } = this.props;
    selectAlbums(albums.data[year], year);
  };

  render() {
    const { artists, albums } = this.props;
    let years: string[] = [];
    if (albums.data) {
      years = Object.keys(albums.data);
    }

    return (
      <ShadowCard
        title="Filtro dos Artistas"
        content={() => (
          <div className="filter-section">
            <ArtistsSelect
              artists={artists.data}
              loading={artists.loading}
              selectArtist={this.handleSelect}
              defaultValue={ARTISTS[0].id}
            />
            <PeriodField years={years} currentYear={albums.year} change={this.handleChangePeriod} />
          </div>
        )}
      />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  artists: state.artists,
  albums: state.albums
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ loadArtists, selectArtist, loadAlbums, selectAlbums }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterSection);
