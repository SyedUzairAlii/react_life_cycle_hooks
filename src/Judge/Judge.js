import React, { Component } from 'react';
export default class Judge extends React.Component {
  constructor() {
    super();
   this.state = {stars: 0, available: false}
  }
 
  applaud() {
    //Send this applaud status to Kid.js
    this.props.updateStatus();
  }
 
  provideStars() {
    const {stars} = this.state;
 
    this.setState({stars: stars + 1},()=>{
      this.state.stars===5&& this.props.leaveKid()
    })
  }
  shouldComponentUpdate(nextProps,nextState){
    return nextState.stars <= 5
  }
  render() {
    const {stars, available} = this.state;
 
    return (
      <div>
        <button type="button" onClick={this.applaud.bind(this)}>
         Appreciate performance
        </button><br /><br />
        <button type="button" onClick={this.provideStars.bind(this)}>
         Provide stars
        </button><br />
        Kid is available: {available}
        <br />
        Stars gained: {stars}
      </div>
    );
  }
 }