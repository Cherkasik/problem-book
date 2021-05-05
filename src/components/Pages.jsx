import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const Pages = ({ pageNumber, currentPage, onChange }) => {
  if (pageNumber === 0) return null;
  return (
    <Container>
      {/* eslint-disable-next-line jsx-a11y/no-onchange */}
      <select value={currentPage} onChange={onChange}>
        {Array.from(Array(pageNumber).keys()).map((number) => (
          <option key={number} value={number + 1}>{number + 1}</option>
        ))}
      </select>
    </Container>
  );
};

Pages.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Pages;
