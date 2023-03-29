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

export default ImageGallery;