import React from 'react';
import moment from 'moment';

const withDates = (date, format = 'MM-DD-YYYY') => {
  const newDate = moment(date).format(format);
  const message = `Date Formatted As ${format}`;
  return Component =>
    class extends React.Component {
      render() {
        return <Component {...this.props} date={newDate} message={message} />;
      }
    };
};

export default withDates;
