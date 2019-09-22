import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';

const words =["Hello","Gold","123456789","Food","pig","chicken"]
var a = parseInt(Math.random() * 10)
const word = words[a]

class App extends Component {
  render() {
    return (
      <div className="App">
            <WordCard value={word}/>
        </div>
      );
   }
}
export default App;
