import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import EditSvg from '../assets/edit.svg';
import ModalContainer from './ModalContainer';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 260px;
  width: 100%;
  margin: 10px;
  padding: 20px;
  border: 1px solid black;
  ${(props) => props.done && `
    background-color: green;
    color: white;
  `}
`;

const Header = styled.div`
  max-height: 100px;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 20px;
`;

const Content = styled.div`
  width: 100%;
  min-height: 200px;
  margin-top: 20px;
`;

const User = styled.div`
  p {
    width: 100%;
    margin: 0;
  }
`;

const Status = styled.div`
  p {
    width: 100%;
    margin: 0;
  }
`;

const Edit = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
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

const emptyError = {
  text: '',
  status: '',
};

const TaskCard = ({
  name, email, text, status, isLoggedIn, updateCard, getTasks,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [error, setError] = useState(emptyError);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(emptyError);
    const request = updateCard(event.target.text.value, event.target.status.value);
    if (request) {
      request.then((result) => {
        if (result.data.status === 'ok') {
          getTasks();
          setOpen(false);
        }
      });
    }
  };

  return (
    <Container done={status >= 10}>
      <Header>
        <User>
          <p>{name}</p>
          <p>{email}</p>
        </User>
        <Status>
          <p>{status}</p>
          {isLoggedIn && (
            <>
              <Edit
                src={EditSvg}
                onClick={() => {
                  setError(emptyError);
                  setOpen(true);
                }}
              />
              <ModalContainer setOpen={setOpen} isOpen={isOpen} header="Create task">
                <form onSubmit={handleSubmit}>
                  <Label>
                    Text
                    <Error>{error.text}</Error>
                    <input defaultValue={text} name="text" />
                  </Label>
                  <Label>
                    Status
                    <Error>{error.status}</Error>
                    <select defaultValue={status} name="status">
                      <option value="0">Task not done</option>
                      <option value="1">Task not done, edited</option>
                      <option value="10">Task done</option>
                      <option value="11">Task done, edited</option>
                    </select>
                  </Label>
                  <button type="submit">Save</button>
                </form>
              </ModalContainer>
            </>
          )}
        </Status>
      </Header>
      <Content>
        {text}
      </Content>
    </Container>
  );
};

TaskCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  updateCard: PropTypes.func.isRequired,
  getTasks: PropTypes.func.isRequired,
};

export default TaskCard;
