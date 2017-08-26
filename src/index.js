import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './configure-store';
import DevTools from './dev-tools';
import routes from './routes';

require('./assets/images/favicon.ico');

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

// Provider - компонент, который дает возможность пользоваться редаксом в нашем приложении внутри реакта, если по-простому...
// Router - наш роутер, мы должны обернуть наше приложение в него
// девтулз - полезная штука, если нажмешь ctrl h - увидишь
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        {routes}
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);
