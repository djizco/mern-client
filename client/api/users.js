import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

const baseURL = process.env.BASE_URL || '';

export const postCheckUsername = username =>
  request.post(`${baseURL}/api/users/checkusername`)
    .send({ username })
    .then(handleSuccess)
    .catch(handleError);
