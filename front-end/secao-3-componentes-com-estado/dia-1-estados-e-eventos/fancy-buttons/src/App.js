import './App.css';
import React from 'react';

class App extends React.Component{
  test() {
    console.log('Hmmmmm bolo de murango')
  }

  render() {
    return (
      <button onClick={this.test}>botao</button>
    )
  }
}

export default App;
