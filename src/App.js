import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components'
import Map from './components/Map'
import LocationList from './components/LocationList'
import Sidebar from './components/Sidebar'
import logo from './logo.svg'
import API_KEYS from './data/api-keys'
import './App.css'

const AppGrid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 25vw;
  grid-template-rows: 1fr 80vh;
  grid-template-areas:
    'header header'
    'map sidebar';
  overflow: hidden;
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
        <Sidebar>
          {() => (
            <Fragment>
              <div
                style={{
                  backgroundColor: `#FCFCFC`,
                  boxShadow: `0 1px 2px 1px rgba(0, 0, 0, .25)`,
                  gridArea: `sidebar-header`,
                  padding: `2rem 0`,
                  marginBottom: `1rem`,
                  position: `sticky`,
                  top: 0,
                }}
              >
                <div style={{ display: `block`, fontWeight: `bold` }}>
                  Locations
                </div>
                {searchBox}
              </div>
              <LocationList locations={markedLocations} />
            </Fragment>
          )}
        </Sidebar>
      </AppGrid>
    )
  }
}
