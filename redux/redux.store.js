import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'remote-redux-devtools';
// import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers/index'
import rootSaga from '../sagas/index'
import storage from './storage'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['a']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const configureStore = (initialState) => {
  if (process.env.NODE_ENV === 'development') {
    const store = createStore(
      persistedReducer,
      initialState,
      compose(applyMiddleware(sagaMiddleware)),
    )
    sagaMiddleware.run(rootSaga)
    return store
  }

  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  )
  sagaMiddleware.run(rootSaga)
  return store
}

const store = configureStore()
const persistor = persistStore(store)
const makeStore = () => store
const wrapper = createWrapper(makeStore)
export { wrapper, persistor, store }
