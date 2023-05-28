import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ onModalClose, children }) => {
  const handleKeyDown = useCallback(event => {
    if (event.key === 'Escape') {
      onModalClose();
    }
  }, [onModalClose]);

  useEffect(() => {
    const onKeyDown = handleKeyDown;
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [handleKeyDown]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onModalClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <img src={children} alt={children} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
