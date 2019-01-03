import { Layout } from 'antd';

import styles from './index.less';

const { Header, Content } = Layout;

export default ({ children }) => {
  return (
    <>
      <Header />
      <Content className={styles.content}>
        {children}
      </Content>
    </>
  );
};
