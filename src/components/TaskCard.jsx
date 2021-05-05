import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import EditSvg from '../assets/edit.svg';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 260px;
  width: 100%;
  margin: 10px;
  padding: 20px;
  border: 1px solid black;
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
  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

const TaskCard = ({
  name, email, text, status, isLoggedIn,
}) => (
  <Container>
    <Header>
      <User>
        <p>{name}</p>
        <p>{email}</p>
      </User>
      <Status>
        <p>{status}</p>
        {isLoggedIn && <img src={EditSvg} alt="" />}
      </Status>
    </Header>
    <Content>
      {text}
    </Content>
  </Container>
);

TaskCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default TaskCard;
