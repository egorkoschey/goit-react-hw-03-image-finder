import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ items, openModal, ...otherProps }) => {
  return (
    items && (
      <ul className={s.galleryList}>
        {items.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            item={webformatURL}
            largeImg={largeImageURL}
            {...otherProps}
          />
        ))}
      </ul>
    )
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;