import * as constants from '../constants';


export interface SetCurrentUser{
    type: constants.SET_CURRENT_USER,
    payload: any
}


export interface OpenDrawer{
    type: constants.OPEN_DRAWER
    payload: null
}

export interface CloseDrawer{
    type: constants.CLOSE_DRAWER
    payload: null
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

export function openDrawer(): OpenDrawer{
    return {
        type: constants.OPEN_DRAWER,
        payload: null
    }
}

export function closeDrawer(): CloseDrawer{
    return {
        type: constants.CLOSE_DRAWER,
        payload: null
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
export type NavbarAction = OpenDrawer | CloseDrawer | SetCurrentUser | LogoutCurrentUser;