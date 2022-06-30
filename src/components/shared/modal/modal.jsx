import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';

import './modal.css';

const Modal = ({ className, isOpen, children, closeModal }) => (
  <ReactModal
    className={clsx(
      'relative inset-0 m-auto w-full max-w-[508px] rounded-lg bg-gradient-to-b from-gray-3 to-gray-2 p-4',
      className
    )}
    bodyOpenClassName="overflow-hidden touch-none"
    isOpen={isOpen}
    ariaHideApp={false}
    closeTimeoutMS={200}
    shouldCloseOnOverlayClick
    onRequestClose={closeModal}
  >
    {children}
  </ReactModal>
);

Modal.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  className: null,
};

export default Modal;
