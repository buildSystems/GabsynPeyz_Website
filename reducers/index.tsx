import * as actions from '../actions';
import {StoreState} from '../types';
import * as constants from '../constants';

let initialState = {isLoggedIn: false, drawerVisible: true, loggedInUser: null, progressVisible: false};

export function drawerReducer(state: StoreState = initialState, action: actions.ToggleDrawer): StoreState{
    return {...state, drawerVisible:!state.drawerVisible};    
}

export function setUserReducer(state: StoreState = initialState, action: actions.CurrentUserAction): StoreState{
    
    switch(action.type){
        case constants.SET_CURRENT_USER: 
            if(action.payload){
                return {...state, isLoggedIn: true, loggedInUser: action.payload};
            }else{
                return {...state, isLoggedIn: false, loggedInUser: null};
            }

        case constants.LOGOUT_CURRENT_USER: 
                return {...state, isLoggedIn: false, loggedInUser: null};

        default: return state;  
    }     
}

export function setProgressReducer(state: StoreState = initialState, action: actions.ProgressVisible): StoreState{
    switch(action.type){
        case constants.PROGRESS_VISIBLE: 
            if(action.payload){
                return {...state, progressVisible: action.payload};
            }else{
                return {...state, progressVisible:false};
            }

        default: return state;  
    }
} 