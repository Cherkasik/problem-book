import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LogoSvg from '../assets/logo.svg';
import AdminSvg from '../assets/admin.svg';
import ModalContainer from './ModalContainer';
import FormField from './FormField';
import { loginRequest } from '../requests';

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
    loginRequest(
      event.target.login.value,
      event.target.password.value,
      (result) => {
        if (result.data.status === 'error') {
          setError(result.data.message);
          return;
        }
        logIn(result.data.message.token);
        setOpen(false);
      },
    );
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
          <FormField name="Login" error={error.username} />
          <FormField name="Password" error={error.password} />
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
