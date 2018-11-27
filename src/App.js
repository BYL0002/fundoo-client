import React, { Component } from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import './App.css';
import LoginS from './screen/LoginS';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path = '/' component = {LoginS} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
