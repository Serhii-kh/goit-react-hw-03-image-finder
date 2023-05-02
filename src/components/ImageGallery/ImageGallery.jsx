import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'
import css from './ImageGallery.module.css'


export const ImageGallery = ({ images }) => (
	<ul className={css.ImageGallery}>
		{images.map(({ tags, webformatURL, id }) => (
			<ImageGalleryItem key={id} src={webformatURL} alt={tags} />)
		)}
	</ul>
);



