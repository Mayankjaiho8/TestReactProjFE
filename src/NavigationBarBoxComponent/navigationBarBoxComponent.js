import React from 'react';
import './navigationBarBoxComponent.css'

import { connect } from 'react-redux'

const NavigationBarBoxComponent = (props) => {
    const { content, status, id, navigateToStepHandler, currentStepId } = props;
    
    let classNameList = "navigation-bar-box";

    classNameList += status === 'current' ? ' active' : ( status === 'completed' ? ' completed' : ' incomplete');
    
    return (status === 'completed') ? (
        <div className = { classNameList } onClick = { () => { navigateToStepHandler({sourceId: currentStepId, targetId: id})}}>
            { content }
        </div>
    ) : (
    <div className = { classNameList }>
        { content }
    </div>
    )
}

const mapStateToProps = store =>{
    return {
        currentStepId : store.stepNavigationBarReducerState.currentStepId,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        navigateToStepHandler : (navigationMetadataObj) => 
                                dispatch({type:'NAV_TO_COMPLETED_STEP_BTN_CLICKED',
                                payload:navigationMetadataObj}),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NavigationBarBoxComponent);