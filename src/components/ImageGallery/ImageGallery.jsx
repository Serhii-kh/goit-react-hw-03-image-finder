import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { fetchImages } from 'Api/fetchImages';
import css from './ImageGallery.module.css'



export class ImageGallery extends Component {

	state = {
		searchQuery: '',
		images: [],
		error: null,
	}

	// componentDidMount() {
	// 	try { fetchImages(this.state.searchQuery).then(images => this.setState({ images })) }
	// 	catch (error) { this.setState({ error }) }
	// }

	componentDidUpdate(prevProps, prevState) {
		const prevSearchQuery = prevProps.searchQuery
		const nextSearchQuery = this.props.searchQuery

		if (prevSearchQuery !== nextSearchQuery) {
			try { fetchImages(nextSearchQuery).then(images => this.setState({ images })) }
			catch (error) { this.setState({ error }) }
		}
	}

	render() {
		const { images } = this.state

		return (
			<ul className={css.ImageGallery} >
				{images.map(({ tags, webformatURL, id }) => (
					<ImageGalleryItem key={id} src={webformatURL} alt={tags} />)
				)}
			</ul >
		)
	}
}



