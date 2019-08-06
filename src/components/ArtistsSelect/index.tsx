import React, { Component } from 'react';

import { Artist } from '../../store/ducks/artists/types';

interface Props {
  artists: Artist[];
  selectArtist: Function;
}

interface StateProps {
  artistName: string;
  showOptions: boolean;
}

const defaultSelect = 'Todos Artistas';

class ArtistsSelect extends Component<Props, StateProps> {
  state = { showOptions: false, artistName: defaultSelect };

  handleSelectArtist = (artist: Artist) => {
    this.setState({ showOptions: false, artistName: artist.name });
    this.props.selectArtist(artist.id);
  };

  handleSelectAll = () => {
    this.setState({ showOptions: false, artistName: defaultSelect });
    this.props.selectArtist();
  };

  handleClick = () => {
    this.setState(state => ({ ...state, showOptions: !state.showOptions }));
  };

  handleBlur = () => {
    setTimeout(() => {
      this.setState({ showOptions: false });
    }, 100);
  };

  render() {
    const { artists } = this.props;
    const { artistName, showOptions } = this.state;
    return (
      <div className={`custom-select ${showOptions ? 'up' : 'down'}`}>
        <input
          name="artist"
          id="artist"
          placeholder="Artistas"
          readOnly
          value={artistName}
          onClick={this.handleClick}
          onBlur={this.handleBlur}
        />
        {showOptions && (
          <ul className="options">
            <li
              onClick={() => this.handleSelectAll()}
              className={artistName === defaultSelect ? 'selected' : ''}
            >
              Todos Artistas
            </li>
            {artists.map(artist => (
              <li
                onClick={() => this.handleSelectArtist(artist)}
                className={artistName === artist.name ? 'selected' : ''}
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
