import s from './Button.module.css';

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

export default Button;