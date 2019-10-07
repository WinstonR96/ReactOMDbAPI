import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const MovieList = props => (
  <Card>
    <Image src={props.movies.Poster} fluid/>
    <Card.Content>
      <Card.Header>{props.movies.Title}</Card.Header>
      <Card.Meta>{props.movies.Year}</Card.Meta>
      <Card.Description>{props.movies.Plot}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name="star" />
      {props.movies.imdbRating}
    </Card.Content>
  </Card>
);

export default MovieList;
