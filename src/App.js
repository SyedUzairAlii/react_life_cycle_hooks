import React, { Component } from 'react';
import './App.css';
import Kid from './kid/kid'
import Teacher from './Teacher/Teacher'
import Judges from './Judge/Judge'

class App extends Component {
  constructor() {
    super()

    this.state = {
      volume : 0,
      furtherSteps: [],
      emotion : '',
      kid: true,
      leaveKid:false,
      leaveJudge:true,

    }
    this.updateSteps = this.updateSteps.bind(this)
    this.sendApplaud = this.sendApplaud.bind(this)
    this.leaveTheShow = this.leaveTheShow.bind(this)
  }
  
  static getDerivedStateFromProps() {
    return {volume : 5}
  }

  updateSteps(furtherSteps) {
    this.setState({furtherSteps})
  }

  sendApplaud() {
    this.setState({emotion : 'happy'})
  }
  leaveTheShow(){
this.setState({kid:false})
  }
  

  
  render() {
    const {furtherSteps,volume,emotion,kid,leaveKid,leaveJudge} = this.state;
    console.log(furtherSteps);

    return (
      <div >
      Volume : {volume}
      <h1>Kid</h1>
      {kid && <Kid dressColor = {'blue'} furtherSteps = {furtherSteps} emotion = {emotion} leaveJudges={()=>this.setState({leaveJudge:false})}/> }
      <hr />
      <h1>Teacher</h1>
      {<Teacher updateSteps = {this.updateSteps}/>}
      <hr />
      <h1>Judges</h1>
      {leaveJudge&&<Judges updateStatus = {this.sendApplaud.bind(this)} leaveKid={()=> this.setState({leaveKid:true})}/>}
      {leaveKid && <button onClick={this.leaveTheShow.bind(this)}>leave the show</button>}
      </div>
    );
  }
}

export default App;