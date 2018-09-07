import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Map from './components/Map'
import logo from './logo.svg'
import API_KEYS from './data/api-keys'
import './App.css'

const AppGrid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 25vw;
  grid-template-rows: minmax(10vh, auto) 1fr;
  grid-template-areas:
    'header header'
    'map sidebar';
`
const SidebarGridChild = styled.div`
  grid-area: sidebar;
  padding: 0.5rem;
  text-align: center;
`

export default class App extends PureComponent {
  state = {
    markedLocations: [],
    searchBox: null,
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

  elevateSearchBox(searchBox) {
    this.setState(() => ({
      searchBox,
    }))
  }

  render() {
    const { searchBox, markedLocations } = this.state
    return (
      <AppGrid>
        <header
          className="App-header"
          style={{
            gridArea: `header`,
            textAlign: `center`,
          }}
        >
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Find Me a Barbell</h1>
        </header>
        <Map
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
            API_KEYS.gmaps
          }&v=3.exp&libraries=geometry,drawing,places`}
          elevateSearchBox={sb => this.elevateSearchBox(sb)}
          handleLocationMarked={location => this.handleLocationMarked(location)}
        />
        <SidebarGridChild>
          <h2>Locations</h2>
          {searchBox && searchBox}
          <ul>
            {markedLocations.map(location => (
              <li>location</li>
            ))}
          </ul>
        </SidebarGridChild>
      </AppGrid>
    )
  }
}
