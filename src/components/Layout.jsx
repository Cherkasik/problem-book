import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import ArrowSvg from '../assets/down-arrow.svg';
import PlusSvg from '../assets/plus.svg';
import ModalContainer from './ModalContainer';

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  height: calc(100% - 80px);
  margin: auto;
`;

const Header = styled.div`
  width: 100%;
  font-size: 40px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  p {
    margin: 0;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Plus = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  cursor: pointer;
`;

const Arrow = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  ${(props) => props.rotateArrow && 'transform: rotate(180deg);'}
  transition: transform 0.3s ease;
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
  email: '',
  text: '',
};

const Layout = ({
  children, changeSortDirection, rotateArrow, getTasks,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [error, setError] = useState(emptyErrors);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(emptyErrors);
    const data = new FormData();
    data.set('username', event.target.username.value);
    data.set('email', event.target.email.value);
    data.set('text', event.target.text.value);
    axios.post('/create?developer=Cherkasik', data).then((result) => {
      if (result.data.status === 'error') {
        setError(result.data.message);
        return;
      }
      getTasks();
      setOpen(false);
    });
  };

  return (
    <Container>
      <Header>
        <p>Task list</p>
        <div>
          <Arrow
            rotateArrow={rotateArrow}
            onClick={changeSortDirection}
            src={ArrowSvg}
          />
          <Plus
            onClick={() => setOpen(true)}
            src={PlusSvg}
          />
          <ModalContainer setOpen={setOpen} isOpen={isOpen} header="Create task">
            <form onSubmit={handleSubmit}>
              <Label>
                Username
                <Error>{error.username}</Error>
                <input name="username" />
              </Label>
              <Label>
                Email
                <Error>{error.email}</Error>
                <input name="email" />
              </Label>
              <Label>
                Text
                <Error>{error.text}</Error>
                <input name="text" />
              </Label>
              <button type="submit">Save</button>
            </form>
          </ModalContainer>
        </div>
      </Header>
      <Content>
        {children}
      </Content>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  changeSortDirection: PropTypes.func.isRequired,
  rotateArrow: PropTypes.bool.isRequired,
  getTasks: PropTypes.func.isRequired,
};

export default Layout;
