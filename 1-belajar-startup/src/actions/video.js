import { VIDEO_IDLE } from './types';
import api from '../api';

export const changeToIdle = () => ({
  type: VIDEO_IDLE
})

export const upload = (data) => (dispatch) => api.video.upload(data).then(message => dispatch(changeToIdle()))
