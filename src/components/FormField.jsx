import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const FormField = ({
  name, error, defaultValue, type, children,
}) => {
  if (type === 'select') {
    return (
      <Label>
        {name}
        <Error>{error}</Error>
        {children}
      </Label>
    );
  }
  return (
    <Label>
      {name}
      <Error>{error}</Error>
      <input defaultValue={defaultValue} name={name.toLowerCase()} />
    </Label>
  );
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  defaultValue: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
};

FormField.defaultProps = {
  error: '',
  defaultValue: '',
  type: 'input',
  children: null,
};

export default FormField;
