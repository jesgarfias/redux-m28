import { createStore } from 'redux';
import productsReducer from '../Reducers/ProducList';
import rootReducer from '../Reducers';

const store = createStore(rootReducer);

export default store;