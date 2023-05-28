import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

// class Modal extends React.Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

const Modal = ({onModalClose}) => {
useEffect(() => {
  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown)
  }
}, [handleKeyDown])


const handleBackdropClick = e => {
  if (e.target === e.currentTarget){
    onModalClose()
  }
}

  const handleKeyDown = event => {
    if (event.key === "Escape"){
      onModalClose()
    }
  }
 
    const {children } = this.props;

    return (
      <div className={styles.overlay} onClick={handleBackdropClick}>
        <div className={styles.modal}>
          <img src={children} alt={children} />
        </div>
      </div>
    );
  }


Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;