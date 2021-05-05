import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import LogoSvg from '../assets/logo.svg';
import AdminSvg from '../assets/admin.svg';
import ModalContainer from './ModalContainer';

const Container = styled.div`
  width: calc(100% - 40px);
  height: 60px;
  position: sticky;
  background-color: aquamarine;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  
  img {
    width: 40px;
    height: 40px;
  }
`;

const Logo = styled.div`
  text-decoration: none;
  color: black;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const Login = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
`;

const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  input {
    width: 100%;
    margin-top: 10px;
  }
  margin: 20px 0;
`;

const Error = styled.div`
  color: red;
  width: 100%;
`;

const emptyErrors = {
  username: '',
  password: '',
};

const NavBar = ({ loggedIn, logOut, logIn }) => {
  const [isOpen, setOpen] = useState(false);
  const [error, setError] = useState(emptyErrors);

  const handleAdminClick = () => {
    setError('');
    if (loggedIn) {
      logOut();
      return;
    }
    setOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(emptyErrors);
    const data = new FormData();
    data.set('username', event.target.login.value);
    data.set('password', event.target.password.value);
    axios.post('/login?developer=Cherkasik', data).then((result) => {
      if (result.data.status === 'error') {
        setError(result.data.message);
        return;
      }
      logIn(result.data.message.token);
      setOpen(false);
    });
  };

  return (
    <Container>
      <Logo to="/">
        <img src={LogoSvg} alt="" />
        Problem Book
      </Logo>
      <Login onClick={handleAdminClick}>
        {loggedIn ? 'Switch to user' : 'Switch to admin'}
        <img src={AdminSvg} alt="" />
      </Login>
      <ModalContainer
        isOpen={isOpen}
        setOpen={setOpen}
        header="Log in as admin"
      >
        <form onSubmit={handleSubmit}>
          <Label>
            Login
            <Error>{error.username}</Error>
            <input
              name="login"
            />
          </Label>
          <Label>
            Password
            <Error>{error.password}</Error>
            <input
              name="password"
            />
          </Label>
          <button type="submit">Login</button>
        </form>
      </ModalContainer>
    </Container>
  );
};

NavBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired,
};

export default NavBar;
