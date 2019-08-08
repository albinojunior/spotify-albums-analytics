import React, { Component } from 'react';
import { Helmet } from "react-helmet"

import FilterSection from "../../components/FilterSection";
import AlbumsPanelSection from "../../components/AlbumsPanelSection";
import TracksSection from "../../components/TracksSection";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Helmet>
          <title />
        </Helmet>
        <FilterSection />
        <AlbumsPanelSection />
        <TracksSection />
      </div>
    );
  }
}
export default Home;
