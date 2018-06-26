import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
      <button
        style={{ background: this.props.color }}
        onClick={() => this.props.handleClick()}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string,
  handleClick: PropTypes.func.isRequired
};

export default Button;
