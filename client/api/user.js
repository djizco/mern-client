import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

const apiURL = process.env.API_URL || '';

export const getUser = () =>
  request.get(`${apiURL}/api/user`)
    .withCredentials()
    .then(handleSuccess)
    .catch(handleError);

export const putUser = info =>
  request.put(`${apiURL}/api/user`)
    .withCredentials()
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const putUserPassword = passwordInfo =>
  request.put(`${apiURL}/api/user/password`)
    .withCredentials()
    .send(passwordInfo)
    .then(handleSuccess)
    .catch(handleError);
