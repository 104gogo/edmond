import React from 'react';
import { Row, Col } from 'antd';

import { CodeMirror } from '../../components';
import { request } from '../../utils';
import styles from './index.less';

export default class Main extends React.Component {
  state = {
    code: '',
    transformCode: '',
  };

  handleChange = async (value) => {
    const { content } = await request('/transform', {
      method: 'post',
      body: JSON.stringify({ code: value }),
    });
    console.log('content', content);

    this.setState({ transformCode: content });
  }

  render() {
    const { code, transformCode } = this.state;
    console.log('transformCode', transformCode);

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
