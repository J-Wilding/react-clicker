import React from 'react';
import logo from './logo.svg'

class ReactClicker extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            clicks: 10,
            title: 'Welcome to React Clicker!',
            titleStyle: 'no-outline '
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({clicks: this.state.clicks +1});
        if (this.state.clicks == 13) {
            this.setState({title: 'My React Clicker'})
        }
        console.log(this.state.title)
    }

    render () {
      return (
        <header className="App-header clicker">
        <div>
            <input type='text' className='no-outline' size='25' placeholder={this.state.title}/>
        </div>
        <button className='clicker' onClick={this.handleClick}>
          <img 
            src={logo} 
            className="App-logo" 
            alt="logo"
          />
        </button>
        <p>Click Count: {this.state.clicks}</p>
      </header>
      )
    }
}

export default ReactClicker;