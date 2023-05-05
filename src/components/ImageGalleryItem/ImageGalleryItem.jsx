import { Component } from 'react'
import css from './ImageGalleryItem.module.css'
import { Modal } from 'components/Modal/Modal'

export class ImageGalleryItem extends Component {

	state = {
		showModal: false,
	}

	// onClose = () => {

	// }

	toggleModal = () => {
		this.setState(({ showModal }) => ({
			showModal: !showModal,
		}))
	}

	render() {
		const { showModal } = this.state
		const { image } = this.props
		const { tags, webformatURL, largeImageURL } = image


		return (
			<>
				<li className={css.ImageGalleryItem}>
					<img className={css.ImageGalleryItem__image}
						src={webformatURL}
						alt={tags}
						onClick={this.toggleModal}
					/>
				</li>
				{showModal && <Modal onClose={this.toggleModal}>
					<img src={largeImageURL} alt={tags} />
				</Modal>}
			</>
		)
	}
}