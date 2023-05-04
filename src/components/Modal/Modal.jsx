import { Component } from 'react'
// import { createPortal } from 'react-dom'
import css from './Modal.module.css'

export class Modal extends Component {
	state = {}

	componentDidMount() {
		window.addEventListener('keydown', e => {
			if (e.code === 'Escape') {
				console.log('asdsasds')
				this.props.onClose();
			}
		})
	}

	render() {
		return (

			<div className={css.Overlay}>
				<div className={css.Modal}>
					{this.props.children}
				</div>
			</div>
		)

	}

}
