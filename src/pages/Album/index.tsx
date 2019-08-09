import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "../../store";
import moment from "moment";
import { Track } from "../../store/ducks/tracks/types";
import { getAlbum } from "../../store/ducks/albums/actions";
import { match } from "react-router-dom";
import NotFound from "../NotFound";
import Loader from "../../components/Loader";

interface ReduxProps {
  album?: any;
  tracks: Track[];
  loading?: boolean;
  match: match<{ id: string }>;
}

interface DispatchProps {
  getAlbum(id: string): void;
}

type Props = ReduxProps & DispatchProps;

class AlbumPage extends Component<Props> {
  componentDidMount() {
    const { match, getAlbum } = this.props;
    getAlbum(match.params.id);
  }

  render() {
    const { album, loading } = this.props;

    if (loading) return <Loader />;
    if (!album) return <NotFound />;

    const {
      name,
      release_date,
      total_tracks,
      external_urls: { spotify },
      tracks: { items },
      images,
      artists
    } = album;

    const { external_urls } = artists[0];
    return (
      <div className="album">
        <Helmet>
          <title> {`Album - ${name}`}</title>
        </Helmet>
        <div className="info">
          <a href={spotify} target="_blank" rel="noopener noreferrer">
            <img
              src={images[0].url}
              alt="Imagem Album"
              title="Abrir no Spotify"
            />
          </a>
          <h2>
            <a href={spotify} target="_blank" rel="noopener noreferrer" title="Abrir no Spotify">
              {name}
            </a>
          </h2>
          <small className="artist">
            <a
              href={external_urls.spotify}
              target="_blank" rel="noopener noreferrer"
              title="Abrir no Spotify"
            >
              {artists[0].name}
            </a>
          </small>
          <br />
          <small className="tracks-info">
            {moment(release_date).format("YYYY")} • {total_tracks} Músicas
          </small>
        </div>
        <div className="tracks">
          {items.map((track: any) => (
            <div key={track.id} className="track">
              <div>
                <a href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                  {track.name}
                </a>
                <small className="time">
                  {moment(track.duration_ms).format("mm:ss")}
                </small>
              </div>
              <a
                className="artist"
                href={external_urls.spotify}
                target="_blank" rel="noopener noreferrer"
                title="Abrir no Spotify"
              >
                <small>{artists[0].name}</small>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  loading: state.albums.loading,
  album: state.albums.album
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ getAlbum }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumPage);
