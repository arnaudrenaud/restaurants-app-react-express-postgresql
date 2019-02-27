import React, { Component } from 'react';
import { Search } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  state = {
    areas: [],
    areaSearchValue: '',
    selectedAreaId: '',
  };

  async componentDidMount() {
    const response = await fetch('/api/areas');
    const areas = await response.json();
    this.setState({ areas });
  }

  handleSearchChange = event => {
    this.setState({ areaSearchValue: event.target.value });
  };

  getAreasMatchingSearch() {
    return this.state.areas
      .filter(area =>
        area.name
          .toLowerCase()
          .startsWith(this.state.areaSearchValue.toLowerCase())
      )
      .map(area => ({
        id: area.id,
        title: area.name,
      }));
  }

  handleResultSelect = (event, data) => {
    this.setState({ selectedAreaId: data.result.id });
  };

  render() {
    return (
      <div>
        <Search
          onSearchChange={this.handleSearchChange}
          results={this.getAreasMatchingSearch()}
          onResultSelect={this.handleResultSelect}
        />
        <p>Selected area: {this.state.selectedAreaId}</p>
      </div>
    );
  }
}

export default App;
