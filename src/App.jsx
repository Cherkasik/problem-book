import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import TaskCard from './components/TaskCard';
import Pages from './components/Pages';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tasks, setTasks] = useState({});
  const [sortDirection, setSortDirection] = useState(true);
  const [sortField, setSortField] = useState('id');
  const [page, setPage] = useState(1);

  const getTasks = () => {
    axios.get(`/?developer=Cherkasik&sort_direction=${sortDirection ? 'asc' : 'desc'}&page=${page}&sort_field=${sortField}`)
      .then((x) => setTasks(x.data.message));
  };

  const checkIfTokenExpired = () => {
    const expireDate = new Date(localStorage.getItem('expireDate'));
    return expireDate <= new Date();
  };

  useEffect(() => {
    axios.defaults.baseURL = 'https://uxcandy.com/~shapoval/test-task-backend/v2';
    if (localStorage.getItem('token')) {
      if (checkIfTokenExpired()) {
        localStorage.clear();
        setLoggedIn(false);
        return;
      }
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortDirection, page, sortField]);

  const logIn = (token) => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    localStorage.setItem('token', token);
    localStorage.setItem('expireDate', date.toString());
    setLoggedIn(true);
  };

  const logOut = () => {
    localStorage.clear();
    setLoggedIn(false);
  };

  const changeSortDirection = () => setSortDirection(!sortDirection);

  const sendUpdateRequest = (id, text, status) => {
    if (checkIfTokenExpired()) {
      setLoggedIn(false);
      return null;
    }
    const data = new FormData();
    data.set('token', localStorage.getItem('token'));
    data.set('text', text);
    data.set('status', status);
    return axios.post(`/edit/${id}?developer=Cherkasik`, data);
  };

  return (
    <>
      <GlobalStyle />
      <NavBar loggedIn={loggedIn} logOut={logOut} logIn={logIn} />
      <Layout
        changeSortDirection={changeSortDirection}
        rotateArrow={sortDirection}
        getTasks={() => {
          setPage(1);
          getTasks();
        }}
        sortField={sortField}
        setSortField={setSortField}
      >
        {tasks.tasks?.map((task) => (
          <TaskCard
            key={task.id}
            isLoggedIn={loggedIn}
            name={task.username}
            email={task.email}
            status={task.status}
            text={task.text}
            updateCard={(text, status) => sendUpdateRequest(task.id, text, status)}
            getTasks={getTasks}
          />
        ))}
        <Pages
          pageNumber={Math.ceil(tasks.total_task_count / 3) || 0}
          currentPage={page}
          onChange={(event) => setPage(parseInt(event.target.value, 10))}
        />
      </Layout>
    </>
  );
}

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    width: 100%;
  }
  body {
    margin: 0;
  }
`;

export default App;
