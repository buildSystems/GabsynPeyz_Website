export interface StoreState {
    isLoggedIn: boolean,
    drawerVisible: boolean,
    progressVisible? : boolean,
    loggedInUser? : any,
    setUserReducer? : any,
    drawerReducer? : any,
    setProgressReducer? : any
}