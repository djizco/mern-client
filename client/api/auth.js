import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

const apiURL = process.env.API_URL || '';

export const postRegister = user =>
  request.post(`${apiURL}/api/auth/register`)
    .withCredentials()
    .send(user)
    .then(handleSuccess)
    .catch(handleError);

export const postLogin = user =>
  request.post(`${apiURL}/api/auth/login`)
    .withCredentials()
    .send(user)
    .then(handleSuccess)
    .catch(handleError);

export const postLogout = () =>
  request.post(`${apiURL}/api/auth/logout`)
    .withCredentials()
    .then(handleSuccess)
    .catch(handleError);
