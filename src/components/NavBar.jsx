import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import LogoSvg from '../assets/logo.svg';
import AdminSvg from '../assets/admin.svg';
import CrossSvg from '../assets/cross.svg';

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

const ModalHeader = styled.div`
  width: calc(100% - 20px);
  display: flex;
  justify-content: space-between;
  line-height: 20px;
  background-color: aquamarine;
  padding: 10px;
`;

const ModalContent = styled.div`
  width: calc(100% - 20px);
  line-height: 20px;
  background-color: white;
  padding: 10px;
  color: red;
  form { color: black; }
`;

const CloseButton = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 20px;
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

const NavBar = ({ loggedIn, logOut, logIn }) => {
  const [isOpen, setOpen] = useState(false);
  const [error, setError] = useState('');

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
    setError('');
    const login = event.target.login.value;
    const password = event.target.password.value;
    if (login === 'admin' && password === '123') {
      logIn();
      setOpen(false);
      return;
    }
    setError('Неправильный логин или пароль');
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
      <Modal
        open={isOpen}
        center
        onClose={() => setOpen(false)}
        closeOnOverlayClick
        closeOnEsc
        showCloseIcon={false}
        focusTrapped={false}
        styles={{ modal: { padding: 0 } }}
      >
        <ModalHeader>
          Login as admin
          <CloseButton src={CrossSvg} onClick={() => setOpen(false)} />
        </ModalHeader>
        <ModalContent>
          {error}
          <form onSubmit={handleSubmit}>
            <Label>
              Login
              <input
                name="login"
              />
            </Label>
            <Label>
              Password
              <input
                name="password"
              />
            </Label>
            <button type="submit">Login</button>
          </form>
        </ModalContent>
      </Modal>
    </Container>
  );
};

NavBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired,
};

export default NavBar;
