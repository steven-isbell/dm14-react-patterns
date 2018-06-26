import React, { Component } from 'react';
import axios from 'axios';

class SwapiContainer extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }
  componentDidMount() {
    axios
      .get('https://www.swapi.co/api/people')
      .then(response => this.setState({ people: response.data.results }));
  }
  render() {
    return <div>{this.props.children(this.state)}</div>;
  }
}

export default SwapiContainer;
