import React, { Component } from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3001'

class CreateMonster extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            image_url: '',
            scary: {
                level: ''
            }
        }
    }

    addMonster = () => {
        const { name, image_url, scary, level } = this.state;
        const newMonster = {
            name: this.state.monsters.name,
            image_url: this.state.monsters.image_url,
            scary: {
                level: this.state.monsters.scary.level
            }
        }
        axios.post(BASE_URL + 'api/createMonster', newMonster).then(results => {
            console.log(results, '11111111111111111')


        })
    }

    updateMonster = () => {
        var { name, image_url, scary, level } = this.State
        var monster = {
            name,
            image_url,
            scary: {
                level: this.state.monster.scary.level
            }
        }

        axios.put(`api/editMonster`, monster).then(results => {
            this.props.updateMonsters
        })
    }

    monsterName = (e) => {
        this.setState = ({ name: e.target.value })
    }
    monsterImg = (e) => {
        this.setState({ image_url: e.target.value })
    }
    scaryLevel = (e) => {
        this.setState({ ...this.state.scary, level: e.target.value })
    }



    render(props) {
        const { handleSubmit, updateMonster, handleChange } = this.props

        return (
            <div>
                <input
                    placeholder='Name'
                    onChange={(e) => handleChange(e, 'name')} />

                <input
                    placeholder='Image'
                    onChange={(e) => handleChange(e, 'image_url')} />

                <input
                    placeholder='Scary Level'
                    onChange={(e) => handleChange(e, 'level')} />

                <button onClick={handleSubmit}>Add to List</button>
            </div>
        )
    }
}

export default CreateMonster;
