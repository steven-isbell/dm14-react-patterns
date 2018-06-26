import React, { Component } from 'react';
import withText from './patterns/withText';
import withProps from './patterns/withProps';

class Input extends Component {
  render() {
    const styles = {
      ...this.props.style,
      color: this.props.color
    };
    return (
      <div>
        <input onChange={e => this.props.handleTextChange(e.target.value)} />
        <h1 style={styles}>{this.props.text}</h1>
      </div>
    );
  }
}

export default withProps(withText(Input));

// connect(function, {})(Input);

// const decorator = connect(
//   mapState,
//   mapDispatch
// );
// decorator(Component);
