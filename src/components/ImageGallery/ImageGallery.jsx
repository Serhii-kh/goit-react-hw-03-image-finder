import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { fetchImages } from 'Api/fetchImages';
import css from './ImageGallery.module.css';
export class ImageGallery extends Component {
	state = {
		images: null,
		page: null,
		error: null,

	};

	componentDidUpdate(prevProps) {
		const prevSearchQuery = prevProps.searchQuery;
		const nextSearchQuery = this.props.searchQuery;

		if (prevSearchQuery !== nextSearchQuery) {
			this.setState({
				page: 1,
			})

			try {
				fetchImages(nextSearchQuery, this.state.page).then(images =>
					this.setState(prevState => ({
						images,
						page: (prevState.page + 1),
					}))
				);
			} catch (error) {
				this.setState({ error });
			}
		}
	}

	handleLoadMoreBtnClick = () => {
		try {
			fetchImages(this.props.searchQuery, this.state.page).then(images =>
				this.setState(prevState => ({
					images: [...prevState.images, ...images],
					page: (prevState.page + 1),
				}))
			);
		} catch (error) {
			this.setState({ error });
		}
	};

	render() {
		const { images } = this.state;

		return (
			<div>
				{images && (
					<>
						<ul className={css.ImageGallery}>
							{images.map((image) => (
								<ImageGalleryItem key={image.id} image={image}
								/>
							))}
						</ul>
						<button
							type="button"
							className={css.Button}
							onClick={this.handleLoadMoreBtnClick}>
							Load more
						</button>
					</>
				)}
			</div>
		);
	}
}
