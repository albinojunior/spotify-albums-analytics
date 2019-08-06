import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { ApplicationState } from '../../store';

import FilterSection from '../../components/FilterSection';
import AlbumsPanelSection from '../../components/AlbumsPanelSection';
import TracksSection from '../../components/TracksSection';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <FilterSection />
        <AlbumsPanelSection />
        <TracksSection />
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
