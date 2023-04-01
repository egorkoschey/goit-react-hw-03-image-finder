import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ handleButtonClick, images }) => {
  return (
    <div className={s.boxBtn}>
      {images.length > 0 && images.length % 12 === 0 && (
        <button
          type="button"
          className={s.loadmoreBtn}
          onClick={handleButtonClick}
        >
          Load more
        </button>
      )}
    </div>
  );
};

Button.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};

export default Button;