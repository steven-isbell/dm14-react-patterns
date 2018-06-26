import React from 'react';

const withText = Component => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        text: ''
      };
    }
    handleTextChange = val => {
      this.setState({ text: val });
    };
    render() {
      const style = {
        border: '1px solid black'
      };
      return (
        <Component
          {...this.props}
          handleTextChange={this.handleTextChange}
          style={style}
          text={this.state.text}
        />
      );
    }
  };
};

export default withText;
