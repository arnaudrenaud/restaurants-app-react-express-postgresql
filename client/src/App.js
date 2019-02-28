import React, { Component, Fragment } from 'react';
import { Icon, Search } from 'semantic-ui-react';

import {
  NavBarContainer,
  NavBar,
  MainContentContainer,
} from './styled-components';

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
      <Fragment>
        <NavBarContainer>
          <NavBar>
            <a>
              <Icon name="building" color="grey" />
              Quartiers
            </a>
            <a>
              <Icon name="star" color="grey" />
              Mes favoris
            </a>
          </NavBar>
        </NavBarContainer>
        <MainContentContainer>
          <Search
            onSearchChange={this.handleSearchChange}
            results={this.getAreasMatchingSearch()}
            onResultSelect={this.handleResultSelect}
          />
          <p>Selected area: {this.state.selectedAreaId}</p>
        </MainContentContainer>
      </Fragment>
    );
  }
}

export default App;
