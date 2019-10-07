import _ from "lodash";
import React, { Component } from "react";
import { Search, Item } from "semantic-ui-react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    //Estados del componente
    this.state = {
      title: "",
      isLoading: false
    };
  }

  render() {
    const { isLoading, title } = this.state;
    return (
      <div>
        <Search
          aligned="center"
          type="text"
          onSearchChange={_.debounce(this.handleChange, 500, {
            leading: true
          })}
          placeholder="Search"
          size="big"
          loading={isLoading}
          results={this.props.results}
          onResultSelect={this.handleResultSelect}
          value={title}
          resultRenderer={this.resRender}
        />
      </div>
    );
  }

  //Funcion que permite modificar los datos mostrados en el listado
  //de resultado
  resRender = ({ Title, Year, imdbID, Poster }) => {
    return (
      <Item.Group>
        <Item>
          <Item.Image src={Poster} size="tiny" />
          <Item.Content>
            <Item.Header as="a">{Title}</Item.Header>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  };

  handleChange = event => {
    this.setState({
      title: event.target.value,
      isLoading: true
    });

    this.props.onSearchMovie(event.target.value);
    this.setState({
      isLoading: false
    });
  };

  handleResultSelect = (e, { result }) => {
    this.setState({ title: result.Title });
    this.props.onSelectedResult(result);
  };
}

export default SearchBar;
