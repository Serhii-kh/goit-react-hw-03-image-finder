import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from "./Modal/Modal";

import css from './App.module.css';

// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна

export class App extends Component {
	state = {
		searchQuery: '',
		// showModal: false,
	};

	onFormSubmit = searchQuery => {
		this.setState({
			searchQuery,
		});
	};

	toggleModal = () => {
		this.setState(({ showModal }) => ({
			showModal: !showModal,
		}))
	}


	render() {
		const { searchQuery, showModal } = this.state;

		return (
			<div className={css.App}>
				<Searchbar onSubmit={this.onFormSubmit} />
				<ImageGallery searchQuery={searchQuery} />

				{showModal && <Modal onClose={this.toggleModal}>
					<h1>YO</h1>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dolor illo, sapiente, et cum minus maiores odit iste beatae exercitationem error, quo placeat nam aliquid id? Tempora minima quam ipsam?20

					</p>
					<button type='button'
						onClick={this.toggleModal}
					>close modal</button>
				</Modal>}

			</div>
		);
	}
}
