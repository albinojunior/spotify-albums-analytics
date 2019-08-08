import React, { Component } from "react";

import { Artist } from "../../store/ducks/artists/types";

interface Props {
  artists: Artist[];
  selectArtist(id: string): void;
  defaultValue?: string;
  loading?: boolean;
}

interface StateProps {
  artistName: string;
  showOptions: boolean;
}

class ArtistsSelect extends Component<Props, StateProps> {
  state = { showOptions: false, artistName: "" };

  handleSelectArtist = (artist: Artist) => {
    this.setState({ showOptions: false, artistName: artist.name });
    this.props.selectArtist(artist.id);
  };

  handleClick = () => {
    this.setState(state => ({ ...state, showOptions: !state.showOptions }));
  };

  handleBlur = () => {
    setTimeout(() => {
      this.setState({ showOptions: false });
    }, 250);
  };

  componentWillReceiveProps(nextProps: Props) {
    const { defaultValue } = this.props;
    const { artists } = nextProps;
    if (defaultValue && artists.length !== this.props.artists.length) {
      const selected = artists.filter(artist => artist.id === defaultValue)[0];
      this.handleSelectArtist(selected);
    }
  }

  render() {
    const { artists, loading } = this.props;
    const { artistName, showOptions } = this.state;
    return (
      <div className={`custom-select ${showOptions ? "up" : "down"}`}>
        <input
          name="artist"
          id="artist"
          placeholder={loading ? "Carregando..." : "Artistas"}
          disabled={loading}
          readOnly
          value={artistName}
          onClick={this.handleClick}
          onBlur={this.handleBlur}
        />
        {showOptions && (
          <ul className="options">
            {artists.map(artist => (
              <li
                onClick={() => this.handleSelectArtist(artist)}
                className={artistName === artist.name ? "selected" : ""}
                key={artist.name}
              >
                {artist.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default ArtistsSelect;
