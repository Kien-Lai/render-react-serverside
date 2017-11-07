import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import ReduxThunk from 'redux-thunk'; 
import 'babel-polyfill';
import reducer from './reducer';
import Home from './container/Home';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(saga);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home} />
        </Router>
    </Provider>,
    document.getElementById('app') 
);