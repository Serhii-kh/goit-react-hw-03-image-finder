import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
// import { Modal } from "./Modal/Modal";
// import css from './App.module.css'
// import axios from "axios"
import { fetchImages } from "Api/fetchImages";
// import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import css from './App.module.css'




// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна

export class App extends Component {
	state = {
		images: null,
		searchQuery: '',
		page: 1,
		error: null,
	}

	async componentDidMount() {


		try {
			await fetchImages().then(images => this.setState({ images }))

		} catch (error) {
			this.setState({ error })
		}

	}





	render() {
		const { images } = this.state

		return (
			<div className={css.App}>
				<Searchbar />
				{images && <ImageGallery images={images} />}
			</div>

		)
	}
};
