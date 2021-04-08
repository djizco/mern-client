import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

const apiURL = process.env.API_URL || '';

export const postCheckUsername = username =>
  request.post(`${apiURL}/api/users/checkusername`)
    .send({ username })
    .then(handleSuccess)
    .catch(handleError);
