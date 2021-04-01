import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

const baseURL = process.env.BASE_URL || '';

export const postTodo = info =>
  request.post(`${baseURL}/api/todos`)
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const getTodos = () =>
  request.get(`${baseURL}/api/todos`)
    .then(handleSuccess)
    .catch(handleError);

export const putToggleCompleteTodo = info =>
  request.put(`${baseURL}/api/todos/complete`)
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const putTodo = info =>
  request.put(`${baseURL}/api/todos`)
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const deleteTodo = info =>
  request.delete(`${baseURL}/api/todos`)
    .send(info)
    .then(handleSuccess)
    .catch(handleError);
