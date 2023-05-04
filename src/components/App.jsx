import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Modal } from "./Modal/Modal";
// import css from './App.module.css'
// import { fetchImages } from "Api/fetchImages";
import css from './App.module.css';

// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна

export class App extends Component {
  state = {
    searchQuery: '',
  };

  onFormSubmit = searchQuery => {
    this.setState({
      searchQuery,
    });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery searchQuery={searchQuery} />
      </div>
    );
  }
}
