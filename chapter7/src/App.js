import React, { Component } from 'react';
import LifeCycleMount from './lifeCycleMount';
import LifeCycle from'./LifeCycle';

function getRandomColor(){
  return '#'+Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state={
    color:'#000000'
  }

  handleClick = ()=>{
    this.setState({
      color:getRandomColor()
    })
  }

  render() {
    return (
      <div className="App">

        <LifeCycleMount number={5} />

        {
        /*
        <button onClick={this.handleClick}>f랜덤색상</button>
        <LifeCycle color={this.state.color}/>
        */
        }
        
        
      </div>
    );
  }
}

export default App;
