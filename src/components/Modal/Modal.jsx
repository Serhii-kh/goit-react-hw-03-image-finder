import css from './Modal.module.css'

export const Modal = ({ src, alt }) => (
	<div className={css.Overlay}>
		<div className={css.Modal}>
			<img src={src} alt={alt} />
		</div>
	</div>
)