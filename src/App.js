import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
import Date from './Date';

import logo from './logo.svg';
import './App.css';
import TextComp from './patterns/TextComp';
import SwapiContainer from './patterns/SwapiContainer';
import MouseComp from './MouseComp';
import Mouse from './patterns/Mouse';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button color={'red'} handleClick={() => alert('Danger')}>
          Danger
        </Button>
        <Button color={'blue'} handleClick={() => alert('Primary')}>
          Primary
        </Button>
        <Button color={'darkslategray'} handleClick={() => alert('Secondary')}>
          Secondary
        </Button>
        <Button color={'green'} handleClick={() => alert('green')}>
          Success
        </Button>
        <Input />
        <br />
        <Date />
        <TextComp render={data => <CoolText {...data} />} />
        <SwapiContainer>
          {({ people }) => people.map(person => <h1>{person.name}</h1>)}
        </SwapiContainer>
        <MouseComp />
        <Mouse
          render={({ x, y }) => (
            <div style={{ height: '300px', width: '300px' }}>
              Your Mouse is At {x}, {y}
            </div>
          )}
        />
        <Mouse
          render={({ x, y }) => (
            <div style={{ height: '300px', width: '300px' }}>
              Your Mouse is At {x}, {y}
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;

const CoolText = ({ handleTextChange, text }) => (
  <div>
    <input onChange={e => handleTextChange(e.target.value)} />
    <h1>{text}</h1>
  </div>
);

// Write a Component called Mouse (RP)
// or withMouse (HoC)
// That has a single method => handleMouseMove
// should track x, y (event.clientX, event.clientY);
// Wrap a compnent and view coordinates.
