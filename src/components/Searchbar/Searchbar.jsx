import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({
      inputValue: e.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputValue.trim() === '') {
      return (
        toast.warn('Sorry you need to enter something',
        {
          theme: 'dark',
          position: 'top-center',
        })
      );
    }
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.formButton}>
            <span className={styles.buttonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            name="input"
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;
