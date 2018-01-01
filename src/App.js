import React, { Component } from 'react';
import './App.css';
import Form from './Form';

class App extends Component {
  constructor() {
    super();
    this.appName = "volSignUp";
  }
  render() {
    return (
      <div className="App">
        <Form />
      </div>
    );
  }
}

export default App;
