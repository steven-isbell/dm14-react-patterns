import React from 'react';

const withProps = Component =>
  class extends React.Component {
    render() {
      return <Component {...this.props} color="green" />;
    }
  };

export default withProps;
