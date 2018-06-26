import React, { Component } from 'react';

class TextComp extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }
  handleTextChange = text => {
    this.setState({ text });
  };
  render() {
    const data = {
      text: this.state.text,
      handleTextChange: this.handleTextChange
    };
    return <div>{this.props.render(data)}</div>;
  }
}

export default TextComp;
