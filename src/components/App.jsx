import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
// import { ImageGallery } from "./ImageGallery/ImageGallery";
// import { Modal } from "./Modal/Modal";
// import css from './App.module.css'
import axios from "axios"




// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна

export class App extends Component {
	state = {
		images: [],
		searchQuery: '',
		page: 1,
		error: null,
	}

	async componentDidMount() {
		const BASE_URL = 'https://pixabay.com/api/';
		const API_KEY = '34855628-78991e6cca5fe0310616aeb58';
		const BASE_FETCH_OPTIONS =
			'image_type=photo&orientation=horizontal&safesearch=true&per_page=4';
		const instance = axios.create({
			baseURL: BASE_URL,
		});


		try {
			const response = await instance.get(
				`?key=${API_KEY}&q=cat&${BASE_FETCH_OPTIONS}&page=1`
			)
			const images = response.data.hits;
			console.log(images)
			this.setState({ images: images })
			return images
		}
		catch (error) { this.setState({ error }) }



	}

	render() {
		return (
			<>
				<Searchbar />

			</>
		)
	}
};
