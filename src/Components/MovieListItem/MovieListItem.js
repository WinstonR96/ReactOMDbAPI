import React, { Component } from "react";

class MovieListItem extends Component {

	render() {
		const { movie } = this.props;
		return (
			<div>
				<li>{movie.Title}</li>
			</div>
		)
	}
}

export default MovieListItem;