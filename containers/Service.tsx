import React from 'react';
import {connect} from 'react-redux';
import {Service} from '../components';
import {StoreState} from '../types';
import * as actions from '../actions';


const mapStateToProps = (state : StoreState) => {
    return {
        progressVisible: state.setProgressReducer.progressVisible
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProgressVisible : (visible) => dispatch(actions.setProgressVisible(visible))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Service);