import { Switch, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import { Main, Hooks1, SetState } from './pages';

export default (
  <LocaleProvider locale={zhCN}>
    <HashRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/hooks1" component={Hooks1} />
        <Route path="/setState" component={SetState} />
      </Switch>
    </HashRouter>
  </LocaleProvider>
);
