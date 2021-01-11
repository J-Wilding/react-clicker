import React from 'react';
import './App.css';
import ReactClicker from './ReactClicker'
import DefaultScreen from './DefaultScreen'

class App extends React.Component {
  constructor(props) { 
    super(props); 
    this.state = { 
      counter: 0, 
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.setState(
      {
        counter: this.state.counter + 1,
      }
      ); 
    console.log(this.state.counter);
  };

  render () {
    let screen;
    if (this.state.counter < 10) {
      screen = <DefaultScreen onClick={this.handleClick} counter={this.state.counter}/>;
    } else {
      screen = <ReactClicker onClick={this.handleClick} counter={this.state.counter}/>
    }
    return (
      <div className="App">
        {screen}
      </div>
    );
  }
}

export default App;
