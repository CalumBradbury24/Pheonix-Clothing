import { createStore, applyMiddleware } from 'redux';
//Middleware catches and displays actions that get fired (between actions firing and root-reducer)
import logger from 'redux-logger'//Redux Middleware
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';

const middleWares = [];
//If process.environment.node evironment is development, log redux actions
if(process.env.NODE_ENV === 'development'){
    middleWares.push(logger);//push logger into middleWares array
}
export const store = createStore(rootReducer, applyMiddleware(...middleWares))//Spread in all values in array as individual arguments

export const persistor = persistStore(store);

//export const { store, persistor };