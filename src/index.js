import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import {Route, Switch} from 'react-router'
import reducers from './reducers'
import {ConnectedRouter, routerReducer, routerMiddleware} from 'react-router-redux'

import Soundboard from './soundboard'
import Manager from './manager'
import Header from './header'

import 'normalize.css'
import 'bulma/css/bulma.css'

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path='*' component={Header} />
        <Switch>
          <Route exact path='/' component={Soundboard} />
          <Route path='/manager' component={Manager} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
