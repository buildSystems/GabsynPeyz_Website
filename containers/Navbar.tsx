import React from 'react';
import {connect} from 'react-redux';
import {Navbar} from '../components';
import {StoreState} from '../types';
import * as actions from '../actions';
import {getCurrentUser} from '../helpers';


const mapStateToProps = (state : StoreState) => {
    return {
        isLoggedIn: state.setUserReducer.isLoggedIn,
        drawerVisible: state.drawerReducer.drawerVisible,
        loggedInUser: state.setUserReducer.loggedInUser,
        progressVisible: state.setProgressReducer.progressVisible
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: () => dispatch(actions.setCurrentUser(getCurrentUser())),
        toggleDrawer : () => dispatch(actions.toggleDrawer(null)),
        setProgressVisible : (visible) => dispatch(actions.setProgressVisible(visible))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);