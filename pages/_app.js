import React, {Component} from 'react';
import '../styles/global.css';
import 'antd/dist/antd.css';
import 'animate.css/animate.css';
import {createStore, combineReducers} from 'redux';
import * as reducers from '../reducers';
import {Provider} from 'react-redux';


let store = createStore(
                   combineReducers(
                    {
                        drawerOpenReducer:reducers.drawerOpenReducer, 
                        drawerCloseReducer:reducers.drawerCloseReducer, 
                        setUserReducer:reducers.setUserReducer,
                        setProgressReducer:reducers.setProgressReducer
                    }       
                   )
            );

export default function App({ Component, pageProps }) {
    // console.log('store get state', store.getState());
    return  <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
}