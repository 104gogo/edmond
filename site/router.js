import { Switch, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import { Main } from './pages';

export default (
  <LocaleProvider locale={zhCN}>
    <HashRouter>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </HashRouter>
  </LocaleProvider>
);
