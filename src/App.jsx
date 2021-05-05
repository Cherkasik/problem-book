import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import TaskCard from './components/TaskCard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('loggedIn') === 'true') {
      setLoggedIn(true);
    }
  }, []);

  const logIn = () => {
    localStorage.setItem('loggedIn', 'true');
    setLoggedIn(true);
  };

  const logOut = () => {
    localStorage.clear();
    setLoggedIn(false);
  };

  return (
    <>
      <GlobalStyle />
      <NavBar loggedIn={loggedIn} logOut={logOut} logIn={logIn} />
      <Layout>
        <TaskCard isLoggedIn={loggedIn} name="Ilya" email="hi@mail.ru" status="OK" text="sample text" />
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
