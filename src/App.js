import { Component } from 'react';
import Container from './components/Containers/Container'
import './App.css';
// import './Cards/Cards.css'

const baseURL = 'https://rickandmortyapi.com/api/'
const charactersURL = baseURL + 'character'

class App extends Component {
  
  state = {
    characters: []
  }

  //async
  componentDidMount(){
    fetch(charactersURL)
      .then(response => response.json())
      .then(result => this.setState({
        characters: result.results
      }))
  }

  render(){
    return (
      <div className="App">
        {this.state.characters.length > 0 ? <Container characters={this.state.characters} /> : null}
      </div>
    );
  }
}

export default App;
