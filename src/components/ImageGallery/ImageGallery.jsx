import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { fetchImages } from 'Api/fetchImages';
import css from './ImageGallery.module.css'



export class ImageGallery extends Component {

	state = {
		searchQuery: '',
		images: null,
		error: null,
		status: 'idle',
	}


	async componentDidUpdate(prevProps, prevState) {
		const prevSearchQuery = prevProps.searchQuery
		const nextSearchQuery = this.props.searchQuery

		if (prevSearchQuery !== nextSearchQuery) {
			this.setState({
				images: [],
			})

			try { await fetchImages(nextSearchQuery).then(images => this.setState({ images })) }
			catch (error) { this.setState({ error }) }
		}
	}

	render() {
		const { images } = this.state

		return (
			<div>
				{images &&
					<>
						<ul className={css.ImageGallery} >
							{images.map(({ tags, webformatURL, id }) => (
								<ImageGalleryItem key={id} src={webformatURL} alt={tags} />)
							)}
						</ul >
						<button type='button' className={css.Button}>Load more</button>
					</>
				}
			</div>)
	}
}



