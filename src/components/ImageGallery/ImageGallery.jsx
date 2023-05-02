import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem"
import css from './ImageGallery.module.css'



export const ImageGallery = ({ images }) =>

(<ul className={css.ImageGallery}>
	{images.map(({ src, alt }) =>
		(<ImageGalleryItem src={src} alt={alt} />)
	)}
</ul>
)






