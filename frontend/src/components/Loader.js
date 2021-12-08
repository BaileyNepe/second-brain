import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles['lds-ripple']} style={{ margin: ' 20rem auto', display: 'block' }}>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
