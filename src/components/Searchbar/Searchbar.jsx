import React, { PureComponent } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends PureComponent {
  state = {
    searchValue: '',
  };
  handlerOnChange = event => {
    this.setState({ searchValue: event.currentTarget.value });
  };
  handlerOnSubmit = event => {
    event.preventDefault();
    if (!this.state.searchValue.trim())
      return alert('Please, enter your request');
    this.props.onSubmit(this.state.searchValue);
    this.setState({ searchValue: '' });
  };
  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handlerOnSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.handlerOnChange}
            value={this.state.searchValue}
            className={css.searchFormInput}
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