import React, { Component } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import MovieList from "./Components/MovieList/MovieList";
import MovieService from "./Services/MovieService";
import { Container, Grid } from "semantic-ui-react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      results: [],
      resultSeleted: [],
      showMovie: false
    };
  }

  componentDidMount = () => {
    const params = `?i=${window.config.IMBDID}&apikey=${window.config.API_KEY}`;
    this.getMovie(params);
  };

  //Funcion que me permite cargar una pelicula inicial para mostrar
  getMovie = params => {
    MovieService.get(params)
      .then(movie =>
        this.setState({
          movies: movie
        })
      )
      .catch(err => console.log("Ocurrio un error: ", err));
  };

  render() {
    return (
      <div className="App">
        <Container textAlign="center">
          <Grid columns="equal">
            <Grid.Row>
              <Grid.Column></Grid.Column>
              <Grid.Column width={8}>
                {/* Componente de barra de busqueda */}
                <SearchBar
                  onSearchMovie={title => this.movieSearch(title)}
                  results={this.state.results}
                  onSelectedResult={movie => this.SelectedResult(movie)}
                />
              </Grid.Column>
              <Grid.Column></Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column></Grid.Column>
              <Grid.Column width={8}>
                <center>
                  {/* Componente de listado */}
                  {this.state.showMovie ? (
                    <MovieList movies={this.state.resultSeleted} />
                  ) : (
                    <MovieList movies={this.state.movies} />
                  )}
                </center>
              </Grid.Column>
              <Grid.Column></Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }

  //Funcion que se encarga de buscar la pelicula especificada
  //Esta funcion es pasada al componente SearchBar, para que sea
  //Ejecutada desde dicho componente
  movieSearch = title => {
    const params = `?i=${window.config.IMBDID}&apikey=${window.config.API_KEY}&s=${title}`;
    MovieService.get(params)
      .then(response => {
        this.setState({ results: response.Search });
      })
      .catch(error => console.log("Ocurrio un error: ", error));
  };

  //Funcion que selecciona la pelicula del listado de peliculas encontradas
  //Esta funcion es pasada al componente SearchBar, para que sea
  //Ejecutada desde dicho componente
  SelectedResult = movie => {
    this.setState({
      showMovie: true,
      resultSeleted: movie
    });
  };
}

export default App;
