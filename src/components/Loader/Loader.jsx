import { MutatingDots } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="rgb(239, 147, 147)"
      secondaryColor="blueviolet"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass={s.loader}
      visible={true}
    />
  );
};

export default Loader;