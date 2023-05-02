import css from './Searchbar.module.css'

export const Searchbar = () => {
	<header className={css.Searchbar}>
		<form className={css.form}>
			<button type="submit" className={css.button}>
				<span className={css.button__label}>Search</span>
			</button>

			<input
				className={css.input}
				type="text"
				autocomplete="off"
				autofocus
				placeholder="Search images and photos"
			/>
		</form>
	</header>
}