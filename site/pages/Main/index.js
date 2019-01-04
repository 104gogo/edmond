import React from 'react';
import { Row, Col, message } from 'antd';

import { CodeMirror } from '../../components';
import { request, catchEval } from '../../utils';
import styles from './index.less';

export default class Main extends React.Component {
  state = {
    code: '',
    transformCode: '',
  };

  handleChange = async (value) => {
    const { content, status, errorMsg } = await request('/transform', {
      method: 'post',
      body: JSON.stringify({ code: value }),
    });

    if (status === 'error') {
      message.error('代码转译失败！');
      console.error(errorMsg);
    } else {
      this.setState({ transformCode: content || '' });
      catchEval(value);
    }
  }

  render() {
    const { code, transformCode } = this.state;

    return (
      <div className={styles.content}>
        <Row>
          <Col span={12} className={styles.col}>
            <CodeMirror value={code} onChange={this.handleChange} />
          </Col>
          <Col span={12} className={styles.col}>
            <CodeMirror value={transformCode} options={{ theme: 'neo', lineNumbers: false, readOnly: 'nocursor' }} />
          </Col>
        </Row>
      </div>
    );
  }
}
