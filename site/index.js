import ReactDOM from 'react-dom';

import { Layout } from './components';
import router from './router';
import '../src/es5/array';
import '../src/es6/let';
import '../src/es6/object';
import '../src/es6/class';
import '../src/es6/promise';
import '../src/es6/generator';
import '../src/es6/async';

ReactDOM.render((
  <Layout>
    {router}
  </Layout>
), document.getElementById('root'));
