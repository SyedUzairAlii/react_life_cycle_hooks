import React from 'react';


export default class Teacher extends React.Component {
  
 sendDataToKid() {
  const furtherStep = ['step3', 'step4', 'step5']
  this.props.updateSteps(furtherStep);
 }


 render() {
   
   return (
     <button onClick={this.sendDataToKid.bind(this)}>Get Help From Teacher</button>
   );
 }
}