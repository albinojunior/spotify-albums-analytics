import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { ApplicationState } from '../../store';

import { loadArtists } from '../../store/ducks/artists/actions';
import { Artist } from '../../store/ducks/artists/types';
import ShadowCard from '../../components/ShadowCard';
import ArtistsSelect from '../../components/ArtistsSelect';

interface ReduxProps {
  artists: Artist[];
}

interface DispatchProps {
  loadArtists(): void;
}

interface StateProps {
  artistId: string | undefined;
}

type Props = ReduxProps & DispatchProps;

class FilterSection extends Component<Props, StateProps> {
  componentDidMount() {
    this.props.loadArtists();
  }

  handleSelect = (artistId: string | undefined) => {
    this.setState({ artistId });
  };

  render() {
    const { artists } = this.props;
    return (
      <ShadowCard
        title="Filtro dos Artistas"
        content={() => (
          <div className="filter-section">
            <ArtistsSelect artists={artists} selectArtist={this.handleSelect} />
          </div>
        )}
      />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  artists: state.artists.data,
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ loadArtists }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterSection);
