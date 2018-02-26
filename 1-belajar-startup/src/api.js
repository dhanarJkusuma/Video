import axios from 'axios';

export default {
  video : {
    upload : (data) => {
      const formData = new FormData();
      formData.append('video', data.data, { type: data.type });

      return axios.post('http://localhost:8080/video/create', formData).then(res => res.data);
    }
  }
}
