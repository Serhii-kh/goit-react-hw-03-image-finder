import { Component } from 'react'
import css from './Modal.module.css'

export class Modal extends Component {
	
	componentDidMount() {
		window.addEventListener('keydown', this.onEscapeKeyPress)
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.onEscapeKeyPress);
	}

	onEscapeKeyPress = e => {
		if (e.code === 'Escape') {
			this.props.onClose()
		}
	}

	HandleOverlayClose = e => {
		if (e.currentTarget === e.target) {
			this.props.onClose();
		}
	};

	render() {
		return (
			<div className={css.Overlay} onClick={this.HandleOverlayClose}>
				<div className={css.Modal}>
					{this.props.children}
				</div>
			</div>
		)

	}

}
