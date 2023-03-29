import s from './Button.module.css';

const Button = ({ handleButtonClick }) => {
  return (
    <div className={s.boxBtn}>
      <button
        type="button"
        className={s.loadmoreBtn}
        onClick={() => handleButtonClick()}
      >
        Load more
      </button>
    </div>
  );
};

export default Button;