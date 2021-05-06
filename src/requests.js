import axios from 'axios';

axios.defaults.baseURL = 'https://uxcandy.com/~shapoval/test-task-backend/v2';

export const getTasksRequest = (sortDirection, page, sortField) => axios
  .get(`/?developer=Cherkasik&sort_direction=${sortDirection ? 'asc' : 'desc'}&page=${page}&sort_field=${sortField}`);

export const updateTaskRequest = (id, text, status) => {
  const data = new FormData();
  data.set('token', localStorage.getItem('token'));
  data.set('text', text);
  data.set('status', status);
  return axios.post(`/edit/${id}?developer=Cherkasik`, data);
};

export const createTaskRequest = (username, email, text, callback) => {
  const data = new FormData();
  data.set('username', username);
  data.set('email', email);
  data.set('text', text);
  axios.post('/create?developer=Cherkasik', data).then(callback);
};

export const loginRequest = (login, password, callback) => {
  const data = new FormData();
  data.set('username', login);
  data.set('password', password);
  axios.post('/login?developer=Cherkasik', data).then(callback);
};
