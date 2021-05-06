import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import EditSvg from '../assets/edit.svg';
import ModalContainer from './ModalContainer';
import FormField from './FormField';

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

const emptyError = {
  text: '',
  status: '',
};

const TaskCard = ({
  name, email, text, status, isLoggedIn, updateCard, getTasks,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [error, setError] = useState(emptyError);
  const isEdited = status % 10 === 1;
  const isDone = Math.floor(status / 10) === 1;

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(emptyError);
    const newText = event.target.text.value;
    let newStatus = parseInt(event.target.status.value, 10) * 10;
    if (newText !== text || isEdited) {
      newStatus += 1;
    }
    const request = updateCard(newText, newStatus);
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
    <Container done={isDone}>
      <Header>
        <User>
          <p>{name}</p>
          <p>{email}</p>
        </User>
        <Status>
          <p>{isEdited ? 'Edited' : ''}</p>
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
                  <FormField name="Text" error={error.text} defaultValue={text} />
                  <FormField name="Status" error={error.status} type="select">
                    <select defaultValue={isDone ? 1 : 0} name="status">
                      <option value="0">Task not done</option>
                      <option value="1">Task done</option>
                    </select>
                  </FormField>
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
