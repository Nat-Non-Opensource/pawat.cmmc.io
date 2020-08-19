import React, { Component } from 'react'
import logo from './logo.svg'
import axios from 'axios'
import './App.css'

class App extends Component {
  print_ver() {
    axios.get('/api/version').then(function (response) {
      console.log(`API Version = ${response.data}`)
    })
  }

  constructor(props) {
    super(props);

    this.print_ver();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
