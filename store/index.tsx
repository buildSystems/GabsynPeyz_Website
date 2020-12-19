import {createStore, combineReducers} from 'redux';
import * as reducers from '../reducers';
import {StoreState} from '../types';

let store = createStore(
                   combineReducers(
                    {drawerOpenReducer:reducers.drawerOpenReducer, drawerCloseReducer:reducers.drawerCloseReducer, setUserReducer:reducers.setUserReducer}       
                   )
            );




