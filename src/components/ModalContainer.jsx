import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import styled from 'styled-components';
import CrossSvg from '../assets/cross.svg';

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

const ModalContainer = ({
  children, isOpen, setOpen, header,
}) => (
  <Modal
    open={isOpen}
    center
    onClose={() => setOpen(false)}
    closeOnOverlayClick
    closeOnEsc
    showCloseIcon={false}
    focusTrapped={false}
    styles={{
      modal: {
        padding: 0,
        width: '500px',
      },
    }}
  >
    <ModalHeader>
      {header}
      <CloseButton src={CrossSvg} onClick={() => setOpen(false)} />
    </ModalHeader>
    <ModalContent>
      {children}
    </ModalContent>
  </Modal>
);

ModalContainer.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
};

export default ModalContainer;
