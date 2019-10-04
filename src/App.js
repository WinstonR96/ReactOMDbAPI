import React, { Component } from 'react';
import './App.css';
import SearchBar from "./Components/SearchBar/SearchBar";
import MovieList from "./Components/MovieList/MovieList";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      results: [],
      resultSeleted: []
    };

    this.movieSearch = this.movieSearch.bind(this);
    this.SelectedResult = this.SelectedResult.bind(this);
  }

  componentDidMount() {
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=5eec5adc&s=scary')
      .then((response) => {
        const { Search } = response.data;
        this.setState({ movies: Search });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        {/* Componente de barra de busqueda */}
        <SearchBar
          onSearchMovie={title => this.movieSearch(title)}
          results={this.state.results}
          onSelectedResult={movie => this.SelectedResult(movie)}
        />
        {/* Componente de listado */}
        {!movies ? <span>Cargando....</span> : <MovieList movies={this.state.movies} />}
      </div>
    );
  }

  movieSearch(title) {
    const endPoint = `${window.config.ENDPOINT}?i=${window.config.IMBDID}&apikey=${window.config.API_KEY}&s=${title}`;
    axios
      .get(endPoint)
      .then(response => {
        this.setState({ results: response.data.Search });
      })
      .catch(error => console.log(error));
  }

  SelectedResult(movie) {
    this.setState({ resultSeleted: movie });
  }
}

export default App;
