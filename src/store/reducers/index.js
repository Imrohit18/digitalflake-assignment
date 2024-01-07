import { combineReducers } from 'redux';

import productsReducer from './products';
import categoriesReducer from './categories';

export const reducers = combineReducers({ categories: categoriesReducer, products: productsReducer, });
