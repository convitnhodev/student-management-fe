import axios from 'axios';

const URL = 'http://localhost:8080/class';

export const getClass = async (idClass) => {
  return axios
    .get(`${URL}/get?idClass=${idClass}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
