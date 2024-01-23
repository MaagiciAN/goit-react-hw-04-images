import React, { useState } from 'react';
import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handlerOnChange = event => {
    setSearchValue(event.currentTarget.value);
  };
  const handlerOnSubmit = event => {
    event.preventDefault();
    if (!searchValue.trim()) return alert('Please, enter your request');
    onSubmit(searchValue);
    setSearchValue('');
  };
  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handlerOnSubmit}>
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>

        <input
          onChange={handlerOnChange}
          value={searchValue}
          className={css.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};