import * as constants from '../constants';


export interface SetCurrentUser{
    type: constants.SET_CURRENT_USER,
    payload: any
}

export interface ToggleDrawer{
    type: constants.TOGGLE_DRAWER
    payload: boolean
}

export interface LogoutCurrentUser{
    type: constants.LOGOUT_CURRENT_USER,
    payload: null
}

export interface ProgressVisible{
    type: constants.PROGRESS_VISIBLE,
    payload: boolean
}

export function setCurrentUser(payload:any): SetCurrentUser {
    return {
        type: constants.SET_CURRENT_USER,
        payload: payload
    }
}

export function toggleDrawer(payload:boolean): ToggleDrawer{
    return {
        type: constants.TOGGLE_DRAWER,
        payload: payload
    }
}

export function logoutCurrentUser(): LogoutCurrentUser{
    return {
        type: constants.LOGOUT_CURRENT_USER,
        payload: null
    }
}

export function setProgressVisible(payload:boolean): ProgressVisible{
    return {
        type: constants.PROGRESS_VISIBLE,
        payload: payload
    }
}

export type CurrentUserAction = SetCurrentUser | LogoutCurrentUser;
export type NavbarAction = ToggleDrawer | SetCurrentUser | LogoutCurrentUser;