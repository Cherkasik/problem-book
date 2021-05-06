import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArrowSvg from '../assets/down-arrow.svg';
import PlusSvg from '../assets/plus.svg';
import ModalContainer from './ModalContainer';
import { createTaskRequest } from '../requests';

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

const Select = styled.select`
  margin-right: 10px;
  height: 20px;
  width: 100px;
`;

const emptyErrors = {
  username: '',
  email: '',
  text: '',
};

const Layout = ({
  children, changeSortDirection, rotateArrow, getTasks, sortField, setSortField,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [error, setError] = useState(emptyErrors);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(emptyErrors);
    createTaskRequest(
      event.target.username.value,
      event.target.email.value,
      event.target.text.value,
      (result) => {
        if (result.data.status === 'error') {
          setError(result.data.message);
          return;
        }
        getTasks();
        setOpen(false);
      },
    );
  };

  return (
    <Container>
      <Header>
        <p>Task list</p>
        <div>
          <Select
            value={sortField}
            onChange={(event) => setSortField(event.target.value)}
          >
            <option value="id">id</option>
            <option value="username">username</option>
            <option value="email">email</option>
            <option value="status">status</option>
          </Select>
          <Arrow
            rotateArrow={rotateArrow}
            onClick={changeSortDirection}
            src={ArrowSvg}
          />
          <Plus
            onClick={() => {
              setError(emptyErrors);
              setOpen(true);
            }}
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
  sortField: PropTypes.string.isRequired,
  setSortField: PropTypes.func.isRequired,
};

export default Layout;
