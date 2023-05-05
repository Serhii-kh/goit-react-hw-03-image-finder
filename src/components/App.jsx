import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import css from './App.module.css';

export class App extends Component {
	state = {
		searchQuery: '',
	};

	onSubmit = searchQuery => {
		this.setState({
			searchQuery,
		});
	};

	render() {
		const { searchQuery} = this.state;

		return (
			<div className={css.App}>
				<Searchbar onSubmit={this.onSubmit} />
				<ImageGallery searchQuery={searchQuery} />
			</div>
		);
	}
}
