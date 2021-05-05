import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  height: calc(100% - 60px);
  margin: auto;
`;

const Header = styled.div`
  width: 100%;
  font-size: 40px;
  margin-top: 20px;
`;

const Layout = ({ children }) => (
  <Container>
    <Header>Task list</Header>
    {children}
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
