import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

const baseURL = process.env.BASE_URL || '';

export const getUser = () =>
  request.get(`${baseURL}/api/user`)
    .then(handleSuccess)
    .catch(handleError);

export const putUser = info =>
  request.put(`${baseURL}/api/user`)
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const putUserPassword = passwordInfo =>
  request.put(`${baseURL}/api/user/password`)
    .send(passwordInfo)
    .then(handleSuccess)
    .catch(handleError);
