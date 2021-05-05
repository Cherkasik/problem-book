import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import TaskCard from './components/TaskCard';
import Pages from './components/Pages';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tasks, setTasks] = useState(false);
  const [sortDirection, setSortDirection] = useState(true);
  // const [sortField, setSortField] = useState(false);
  // const [sortValue, setSortValue] = useState(false);

  const getTasks = () => {
    axios.get(`/?developer=Cherkasik&sort_direction=${sortDirection ? 'asc' : 'desc'}`)
      .then((x) => setTasks(x.data.message));
  };

  useEffect(() => {
    axios.defaults.baseURL = 'https://uxcandy.com/~shapoval/test-task-backend/v2';
    if (localStorage.getItem('token')) {
      const expireDate = new Date(localStorage.getItem('expireDate'));
      if (expireDate <= new Date()) {
        localStorage.clear();
        return;
      }
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortDirection]);

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

  return (
    <>
      <GlobalStyle />
      <NavBar loggedIn={loggedIn} logOut={logOut} logIn={logIn} />
      <Layout
        changeSortDirection={changeSortDirection}
        rotateArrow={sortDirection}
        getTasks={getTasks}
      >
        {tasks.tasks?.map((task) => (
          <TaskCard
            key={task.id}
            isLoggedIn={loggedIn}
            name={task.username}
            email={task.email}
            status={task.status}
            text={task.text}
          />
        ))}
        <Pages
          pageNumber={Math.ceil(tasks.totalTaskCount / 3) || 0}
          currentPage={1}
          onChange={() => {}}
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
