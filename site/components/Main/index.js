import React from 'react';
import { Row, Col } from 'antd';

import Box from './Box';
import CodeMirror from '../CodeMirror';

export default ({ children }) => {
  return (
    <>
      <Row>
        <Col span={8}>
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
    </>
  );
};
