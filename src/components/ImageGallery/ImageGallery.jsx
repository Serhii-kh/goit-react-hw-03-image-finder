import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { fetchImages } from 'Api/fetchImages';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types'

export class ImageGallery extends Component {
	state = {
		images: [],
		page: null,
		error: null,
		loading: false,
	};

	componentDidUpdate(prevProps) {
		const { page } = this.state;
		const prevSearchQuery = prevProps.searchQuery;
		const nextSearchQuery = this.props.searchQuery;

		if (prevSearchQuery !== nextSearchQuery) {
			this.setState({
				page: 1,
				loading: true,
			})

			try {
				fetchImages(nextSearchQuery, page).then(images =>
					this.setState(prevState => ({
						images,
						page: (prevState.page + 1),
					}))
				);
			} catch (error) {
				this.setState({ error })
			}
			finally {
				this.setState({
					loading: false,
				})
			}
		}
	}

	handleLoadMoreBtnClick = () => {
		this.setState({
			loading: true,
		})

		try {
			fetchImages(this.props.searchQuery, this.state.page).then(images =>
				this.setState(prevState => ({
					images: [...prevState.images, ...images],
					page: (prevState.page + 1),
				}))
			);
		} catch (error) {
			this.setState({ error });
		} finally {
			this.setState({
				loading: false,
			})
		}
	};

	render() {
		const { images, loading } = this.state;
		const imagesLength = this.state.images.length;

		return (
			<div className={css.listWrapper}>
				{loading && <Loader />}
				{imagesLength > 0 && (
					<>
						<ul className={css.ImageGallery}>
							{images.map((image) => (
								<ImageGalleryItem key={image.id} image={image}
								/>
							))}
						</ul>

						<Button
							type="button"
							onClick={this.handleLoadMoreBtnClick}>
							Load more
						</Button>
					</>
				)}
			</div>
		);
	}
}


ImageGallery.propTypes = {
	images: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	image: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired,
	fetchImages: PropTypes.node.isRequired,
}