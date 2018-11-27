import React from 'react';
import './navigationBarComponent.css';

import NavigationBarBoxComponent from './../NavigationBarBoxComponent/navigationBarBoxComponent';

import { connect } from 'react-redux';

const NavigationBarComponent = (props) => {

    const { navigationBarBoxObjArr } = props;
    const navigationBarBoxComponentArr = navigationBarBoxObjArr.map(navigationBarBoxObj => 
        <NavigationBarBoxComponent key = { navigationBarBoxObj.id }
                          id = { navigationBarBoxObj.id }
                          content = { navigationBarBoxObj.content }
                          status = { navigationBarBoxObj.status}/>
    )
    
    return (
            <div className = "navigation-bar-container">
                { navigationBarBoxComponentArr }
            </div>
    )
}

const mapStateToProps = (store) => {
    return {
        navigationBarBoxObjArr : store.navigationBarReducerState.navigationBarBoxObjArr
    }
}

export default connect(mapStateToProps)(NavigationBarComponent);