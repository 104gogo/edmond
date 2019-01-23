import ReactDOM from 'react-dom';

import { Layout } from './components';
import router from './router';

ReactDOM.render((
  <Layout>
    {router}
  </Layout>
), document.getElementById('root'));

