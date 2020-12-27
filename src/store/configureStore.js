import {compose, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './reducers';
import rootSaga from '../sagas/rootSaga';

export default function configureStore({initialState}){
    const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        createRootReducer(),
        componseEnhancers(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(rootSaga);
    return {store};
}