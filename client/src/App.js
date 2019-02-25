import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    areas: [],
  };

  async componentDidMount() {
    const response = await fetch('/api/areas');
    const areas = await response.json();
    this.setState({ areas });
  }

  render() {
    return (
      <div className="App">
        <select>
          {this.state.areas.map(area => (
            <option>{area.name}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default App;
