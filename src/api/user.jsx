import axios from 'axios';
import { useCookies } from 'react-cookie';

const URL = 'http://localhost:8080/user';

export const getUser = async (username) => {
  return axios
    .get(`${URL}/get?username=${username}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
