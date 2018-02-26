export function captureUserMedia(callback){
  var params = { audio: true, video: true };

  navigator.getUserMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);
  navigator.getUserMedia(params, callback, (error) => {
    console.log(JSON.stringify(error));
  });
}
