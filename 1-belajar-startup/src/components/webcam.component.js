import React, { Component } from 'react';

class Webcam extends Component{
  state = {}

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <video autoPlay src={this.props.src} width="400" height="300"/>
      </div>
    );
  }
}

export default Webcam;
