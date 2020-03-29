import React, { Component } from 'react';
import './App.css';

const brownColor = 'brown';
const blueColor = 'blue';


export default class App extends Component{

constructor(props){
  // need super props to access this.state
  super(props);

  this.state = {
    // add color or an array of colors here
    color: blueColor,
    // set click counter to 0
    clickCounter: 0}
    // add array of colors to change colors to more than or randomly
    //use math.random nad this.state to reference the array and .length
    // color: ['blue', 'pink', 'red', 'purple'],
    // document.classID(refere the div)[ref the index/ it was a 0]... this.state.color[reference the array]
    this.onChange = this.onChange.bind(this);
  }

onChange = (e) =>{
  //set state to something else
  // setState is a component lifetsyle method
  this.setState({color: 'orange',
                // make a click counter and call the state
                // may need to change "++" to "+ 1"
                // ++ mutates states directly, so it won't work
                // .bind to recognize ".this"
                clickCounter: this.state.clickCounter + 1 })
                // ADD if statement (see if that works)
                const onChangeToNextColor = this.state.color === blueColor ? brownColor : blueColor;
                this.setState({ color: onChangeToNextColor})
                console.log("click counter ===>", this.state.clickCounter)
}

onChangeToNextColor = (e) =>{}

render() {
  return (
    //app is parent container
    <div className="App">
      <h1>Box Color Change. </h1>
      {/* onClick triggers the onChange function */}
      <div className="colorBox" style={{backgroundColor: this.state.color}} onClick={this.onChange}>
        <p>Click Here</p>
      </div>
    </div>

  )
}
}