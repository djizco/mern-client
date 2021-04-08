import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

const apiURL = process.env.API_URL || '';

export const postTodo = info =>
  request.post(`${apiURL}/api/todos`)
    .withCredentials()
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const getTodos = () =>
  request.get(`${apiURL}/api/todos`)
    .withCredentials()
    .then(handleSuccess)
    .catch(handleError);

export const putToggleCompleteTodo = info =>
  request.put(`${apiURL}/api/todos/complete`)
    .withCredentials()
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const putTodo = info =>
  request.put(`${apiURL}/api/todos`)
    .withCredentials()
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const deleteTodo = info =>
  request.delete(`${apiURL}/api/todos`)
    .withCredentials()
    .send(info)
    .then(handleSuccess)
    .catch(handleError);
