import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }


handleBackdropClick = e => {
  if (e.target === e.currentTarget){
    this.props.onModalClose()
  }
}

  handleKeyDown = event => {
    if (event.key === "Escape"){
      this.props.onModalClose()
    }
  }
  render() {
    const {children } = this.props;

    return (
      <div className={styles.overlay} onClick={this.handleBackdropClick}>
        <div className={styles.modal}>
          <img src={children} alt={children} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;