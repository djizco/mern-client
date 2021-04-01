import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

const baseURL = process.env.BASE_URL || '';

export const postRegister = user =>
  request.post(`${baseURL}/api/auth/register`)
    .send(user)
    .then(handleSuccess)
    .catch(handleError);

export const postLogin = user =>
  request.post(`${baseURL}/api/auth/login`)
    .send(user)
    .then(handleSuccess)
    .catch(handleError);

export const postLogout = () =>
  request.post(`${baseURL}/api/auth/logout`)
    .then(handleSuccess)
    .catch(handleError);
