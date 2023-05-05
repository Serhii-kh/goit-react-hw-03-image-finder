import css from './Button.module.css'

export const Button = ({ type, children, onClick }) => (
	<button type={type} className={css.Button} onClick={onClick}>
		{children}
	</button>
)