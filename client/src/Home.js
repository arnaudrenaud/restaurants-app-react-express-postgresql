import React, { Component, Fragment } from 'react';
import { Search } from 'semantic-ui-react';

class Home extends Component {
  getAreasMatchingSearch() {
    return this.props.areas
      .filter(area =>
        area.name
          .toLowerCase()
          .startsWith(this.props.areaSearchValue.toLowerCase())
      )
      .map(area => ({
        id: area.id,
        title: area.name,
      }));
  }

  render() {
    return (
      <Fragment>
        <Search
          value={this.props.areaSearchValue}
          results={this.getAreasMatchingSearch()}
          onSearchChange={this.props.onSearchChange}
          onResultSelect={this.props.onResultSelect}
        />
        <p>Selected area: {this.props.selectedAreaId}</p>
      </Fragment>
    );
  }
}

export default Home;
