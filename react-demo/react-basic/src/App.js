import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state={
    persons:[
      {name:'王伟东',cont:'20'},
      {name:'佳琪',cont:'20'},
      {name:'文明',cont:'20'},
    ],
    other:"anything"
  }
swithNameHandler=(newTex,newCont) => {
  console.log("chied-show-change");
  this.setState({
    persons:[
      {name:'大王八',cont:'2000'},
      {name:newTex,cont:newCont},
      {name:'大灰狼',cont:'6000'},
    ]
  })
}
nameChangeHandler =(event) => {
  this.setState({
    persons:[
      {name:event.target.value,cont:'2000'},
      {name:'大灰狼',cont:'6000'},
      {name:'大灰狼',cont:'6000'},
    ]
  }) 
}

render() {
    return (
      <div className="App">
        <h1>Hello,world!</h1>
        <button className='btn'>更改状态值</button>
        <Person namefn={this.nameChangeHandler} name={this.state.persons[0].name} cont={this.state.persons[0].cont}/>
        <Person myfn={this.swithNameHandler.bind(this,'31','222')} name={this.state.persons[1].name} cont={this.state.persons[1].cont}/>
        <Person name={this.state.persons[2].name} cont={this.state.persons[2].cont}/>
      </div>
    );
  }
}

export default App;
