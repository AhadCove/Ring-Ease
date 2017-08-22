import { compose, createStore, applyMiddleware } from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './Reducers';

// Load up old state here

const middleware = applyMiddleware( logger, thunk );

const store = createStore(reducers, {}, middleware );

// const store = createStore(reducers, undefined, compose( middleware, autoRehydrate()) );
// begin periodically persisting the store
// persistStore(store);

// export default createStore(reducers, savedState, middleware);
export default store;
