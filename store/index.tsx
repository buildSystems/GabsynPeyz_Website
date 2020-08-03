import {createStore, combineReducers} from 'redux';
import * as reducers from '../reducers';
import {StoreState} from '../types';

let store = createStore(
                   combineReducers(
                    {drawerReducer:reducers.drawerReducer, setUserReducer:reducers.setUserReducer}       
                   )
            );




