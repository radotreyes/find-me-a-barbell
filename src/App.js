import React, { Component } from 'react'
import Map from './components/Map'
import logo from './logo.svg'
import './App.css'

export default class App extends Component {
  state = {
    markedLocations: [],
  }

  componentDidMount() {
    // TODO: pull data from backend
    // TODO: set state to include all of those locations
  }

  handleLocationMarked(location) {
    this.setState(prevState => ({
      markedLocations: [...prevState.markedLocations, location],
    }))
  }

  render() {
    const { markedLocations } = this.state
    return (
      <div className="App" style={{ display: `flex`, flexFlow: `row wrap` }}>
        <header className="App-header" style={{ flexBasis: `100vw` }}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Find Me a Barbell</h1>
        </header>
        <div style={{ flexBasis: `50vw` }}>
          <Map
            isMarkerShown
            handleLocationMarked={location => this.handleLocationMarked(location)
            }
          />
        </div>
        <div style={{ flexBasis: `50vw` }}>
          {/* // TODO: move these divs to an actual formatted component */}
          <h2>Locations</h2>
          <ul>
            {markedLocations.map(location => (
              <li>{location.details.formatted_address}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
