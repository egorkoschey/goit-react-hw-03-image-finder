import { Component } from 'react';
import s from './Modal.module.css';

class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModal);
  }

  handleCloseModal = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };
  render() {
    const { image } = this.props;

    return (
      <div className={s.overlay} onClick={this.handleBackdropClick}>
        <div className={s.modal}>
          <img src={image} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;