import React, { Component } from 'react';
import withDates from './patterns/withDates';

class Date extends Component {
  render() {
    return (
      <div>
        <h1>The date is {this.props.date}</h1>
        <h1>{this.props.message}</h1>
      </div>
    );
  }
}

export default withDates('2016-04-23', 'YYYY/MM/DD')(Date);
