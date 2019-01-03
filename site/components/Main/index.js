import React from 'react';
import { Row, Col } from 'antd';

import CodeMirror from '../CodeMirror';
import styles from './index.less';

export default class Main extends React.Component {
  static getDerivedStateFromProps(props, state) {
    return {};
  }

  render() {
    const { code, transformCode } = this.props;

    return (
      <div className={styles.content}>
        <Row>
          <Col span={12} className={styles.col}>
            <CodeMirror value={code} />
          </Col>
          <Col span={12} className={styles.col}>
            <CodeMirror value={transformCode} options={{ theme: 'neo', lineNumbers: false, readOnly: 'nocursor' }} />
          </Col>
        </Row>
      </div>
    );
  }
}
