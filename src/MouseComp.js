import React from 'react';
import withMouse from './patterns/withMouse';

const MouseComp = ({ x, y }) => {
  console.log(x, y);
  return (
    <div style={{ height: '300px', width: '300px' }}>
      Your Mouse is at {x}, {y}
    </div>
  );
};

export default withMouse(MouseComp);
