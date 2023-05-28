import React, {useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';
import { toast } from 'react-toastify';

// class Searchbar extends Component {
//   state = {
//     inputValue: '',
//   };

const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue({
      inputValue: e.currentTarget.value.toLowerCase(),
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputValue.trim() === '') {
      return toast.warn('Sorry, there are no search query. Please try again.', {
        theme: 'darked',
      });
    }
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button type="submit" className={styles.formButton}>
          <span className={styles.buttonLabel}>Search</span>
        </button>

        <input
          onChange={handleChange}
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
};

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;
