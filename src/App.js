import React, { Component } from 'react'
import Map from './components/Map'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Map isMarkerShown />
      </div>
    )
  }
}

export default App