import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upload } from '../../actions/video';
import PropTypes from 'prop-types';
import { captureUserMedia } from '../../AppUtils';
import RecordRTC from 'recordrtc';
import Webcam from '../webcam.component';


const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
navigator.mozGetUserMedia || navigator.msGetUserMedia);


class RecordingPage extends Component{
  state = {
    url: null,
    recorderVideo: null
  }

  componentDidMount = () => {
    if(!hasGetUserMedia) {
      alert("Your browser cannot stream from your webcam. Please switch to Chrome or Firefox.");
      return;
    }
    this.requestUserMedia();
  }

  startRecording = () => {
    captureUserMedia((stream) => {
      this.state.recorderVideo = RecordRTC(stream, { type:'video' });
      this.state.recorderVideo.startRecording();
    });
  }

  requestUserMedia = () => {
    captureUserMedia((stream) => {
      this.setState({ url: window.URL.createObjectURL(stream) })
    })
  }

  stopRecording = () => {
    this.state.recorderVideo.stopRecording(() => {
      let params = {
        type: 'video/webm',
        data: this.state.recorderVideo.blob,
        id: Math.floor(Math.random()*90000) + 10000
      };

      this.props.upload(params).then(data => console.log(data));
    })
  }

  render = () => {
    return (
      <div>
        <Webcam src={this.state.url} />
        <button onClick={this.startRecording}> Start Recording </button>
        <button onClick={this.stopRecording}> Stop Recording </button>
      </div>
    );
  }
}

RecordingPage.protoType = {
  upload: PropTypes.func.isRequired
}

export default connect(null, { upload })(RecordingPage);
