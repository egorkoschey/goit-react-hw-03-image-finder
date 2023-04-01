import Modal from 'components/Modal';
import { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };
  handleModalOpen = () => {
    this.setState({ isModalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { item, largeImg } = this.props;
    return (
      <>
        <li className={s.listItem}>
          <img
            className={s.itemImage}
            src={item}
            onClick={this.handleModalOpen}
            alt=""
            loading="lazy"
          />
          {this.state.isModalOpen && (
            <Modal image={largeImg} closeModal={this.handleModalClose} />
          )}
        </li>
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  item: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
};

export default ImageGalleryItem;