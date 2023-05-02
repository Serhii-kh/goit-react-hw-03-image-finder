import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ src, alt }) => (
	<li className={css.ImageGalleryItem}>
		<img className={css.ImageGalleryItem__image} src={src} alt={alt} />
	</li>
)