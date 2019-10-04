import React, { Component } from 'react';
import MovieListItem from "./../MovieListItem/MovieListItem";

class MovieList extends Component {

	render() {
		const { movies } = this.props;
		return (
			<div>
				{!movies ? <div>Cargando...</div> : this.movieItems()}
			</div>
		)
	}


	movieItems() {
		const { movies } = this.props;
		movies.map((movie) => {
			return <MovieListItem movie={movie} />
		});
	}
}

export default MovieList;