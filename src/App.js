import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-1">
        <div className="box-1">
          <h3>Box One</h3>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit .  </p>
        </div>
        <div className="box-2">
            <h3>Box Two</h3>
              <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit . </p>
            </div>
        <div className="box-3">
            <h3>Box Three</h3>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit .</p>
        </div>
        <div className="container-2">
            <div className="container-2-box">
              <h3>Box Four</h3>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit .  </p>
            </div>
            <div className="container-2-box">
                <h3>Box Five</h3>
                  <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit . </p>
                </div>
            <div className="container-2-box">
                <h3>Box Six</h3>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit .</p>
            </div>
          </div>
      </div>
      
      
    );
  }
}

export default App;
