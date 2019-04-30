import './styles/core.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';
import reduxThunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import App from './App';
import Kontakt from './components/Kontakt/kontakt';
import Dashboard from './components/Dashboard/dashboard';
import Onama from './components/Onama/o_nama';
import Kursevi from './components/Kursevi/kursevi';
import Galerija from './components/Galerija/galerija';
import ErrorPage from './components/ErrorPage';

import { KONTACT_RUTA, ROOT_ROUTE, O_NAMA_RUTA, GALERIJA_RUTA, KURSEVI_RUTA } from './helper/routes';

const history = createBrowserHistory();
window.browserHistory = history;

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path={ROOT_ROUTE} component={Dashboard} />
          <Route excat path={O_NAMA_RUTA} component={Onama} />
          <Route excat path={KURSEVI_RUTA} component={Kursevi} />
          <Route excat path={GALERIJA_RUTA} component={Galerija} />
          <Route excat path={KONTACT_RUTA} component={Kontakt} />
          <Route path='*' component={ErrorPage} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
