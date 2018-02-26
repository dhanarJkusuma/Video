import { VIDEO_IDLE } from '../actions/types';

export default function video (state={}, action={}){
  switch (action.type) {
    case VIDEO_IDLE:
      return action.message;
    default:
      return state;

  }
}
