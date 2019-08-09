import React, { Component } from 'react';

import FilterSection from "../../components/FilterSection";
import AlbumsPanelSection from "../../components/AlbumsPanelSection";
import TracksSection from "../../components/TracksSection";

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
export default Home;
