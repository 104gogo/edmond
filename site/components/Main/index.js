import React from 'react';
import { Row, Col } from 'antd';

import Box from './Box';
import CodeMirror from '../CodeMirror';

export default () => (
  <Row style={{ height: '100%' }}>
    <Col span={8} style={{ height: '100%' }}>
      <Box>
        <CodeMirror />
      </Box>
    </Col>
    <Col span={8}>
      <Box />
    </Col>
    <Col span={8}>
      <Box />
    </Col>
  </Row>
);
