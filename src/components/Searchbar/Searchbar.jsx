import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    const { value, name } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchQuery } = this.state;

    if (searchQuery.trim() === '') {
      alert('Please enter your search query');
      return;
    }

    this.props.onSubmit(searchQuery);
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchForm__button}>
            <span className={css.SearchForm__button__label}>Search</span>
          </button>

          <input
            className={css.SearchForm__input}
            value={searchQuery}
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
						placeholder="Search images and photos"
						name="searchQuery"
          />
        </form>
      </header>
    );
  }
}
