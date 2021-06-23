import { createStore } from 'redux';
import searchReducer from '../reducers/reducers';

const store = createStore(
    searchReducer
);

export default store;
