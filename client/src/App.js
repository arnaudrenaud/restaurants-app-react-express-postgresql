import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Favorites from './Favorites';
import { StyledIcon, MainContentContainer } from './styled-components/common';
import {
  NavBarContainer,
  NavBar,
  StyledNavLink,
} from './styled-components/nav';
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

  handleResultSelect = (event, data) => {
    this.setState({
      selectedAreaId: data.result.id,
      areaSearchValue: data.result.title,
    });
  };

  render() {
    return (
      <Fragment>
        <NavBarContainer>
          <NavBar>
            <StyledNavLink exact to="/" activeClassName="NavLink--active">
              <StyledIcon name="building" color="grey" />
              Quartiers
            </StyledNavLink>
            <StyledNavLink to="/mes-favoris" activeClassName="NavLink--active">
              <StyledIcon name="star" color="grey" />
              Mes favoris
            </StyledNavLink>
          </NavBar>
        </NavBarContainer>
        <MainContentContainer>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  areas={this.state.areas}
                  areaSearchValue={this.state.areaSearchValue}
                  selectedAreaId={this.state.selectedAreaId}
                  onSearchChange={this.handleSearchChange}
                  onResultSelect={this.handleResultSelect}
                />
              )}
            />
            <Route path="/mes-favoris" component={Favorites} />
          </Switch>
        </MainContentContainer>
      </Fragment>
    );
  }
}

export default App;
