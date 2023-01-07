import axios from 'axios';

const URL = 'http://localhost:8080/user';

export const getUser = async () => {
  const username = localStorage.getItem('user');
  return axios
    .get(`${URL}/get?username=${username}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
