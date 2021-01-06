import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        characters: [{
            name: 'Piyush',
            job: 'Leader',
        }, {
            name: 'Ayushi',
            job: 'Manager',
        }, {
            name: 'Shweta',
            job: 'Organizer',
        }, {
            name: 'Arvinth',
            job: 'Player1',
        }, {
            name: 'Harsh',
            job: 'Player2',
        }, {
            name: 'Harish',
            job: 'Player3',
        }, {
            name: 'Akshantar',
            job: 'Player4',
        }, {
            name: 'Sandeep',
            job: 'Player5',
        },],
    }

    removeCharacter = (index) => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }
    handleSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character] })
    }

    render() {
        const { characters } = this.state

        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App