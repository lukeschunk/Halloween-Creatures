import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import CreateMonster from './components/CreateMonster'
import DeleteButton from './components/DeleteButton'

const BASE_URL = 'http://localhost:3001'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    axios.get(BASE_URL + '/api/necronomicon').then(response => {
      console.log(response)
      this.setState({ monsters: response.data })
    })
  }

  updateMonsters = (monsters) => {
    this.setState({ monsters })
  }

  handleSubmit = () => {
    const { name, image_url, scary, level } = this.state
    axios.post(BASE_URL + '/api/createMonster', {
      name,
      image_url,
      scary: {
        level,
      }


    }).then(response => {
      console.log(response)
      this.setState({
        monsters: response.data
      })
    })
  }

  handleChange = (e, key) => {
    this.setState({ [key]: e.target.value })
  }
  render() {
    const showMonsters = this.state.monsters.map(creatures => {
      return (
        <div >
        <div className ='blegh' >

          <h1>{creatures.name}</h1>
          <img src={creatures.image_url} />
          <h2>Scary Level: {creatures.scary.level}</h2>
          </div>


        </div>
      )
    })
    return (
      <div className="App">
        <CreateMonster
          updateMonsters={this.updateMonsters}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange} />
        {showMonsters}
      </div>
    );
  }
}

export default App;
