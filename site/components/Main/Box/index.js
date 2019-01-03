import styles from './index.less';

export default ({ children }) => (
  <div className={styles.content}>
    {children}
  </div>
);
