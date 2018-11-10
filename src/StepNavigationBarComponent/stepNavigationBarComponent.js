import React from 'react';
import './stepNavigationBarComponent.css'

import { connect } from 'react-redux';

const StepNavigationBarComponent = (props) => {

    const { currentStepId, navigationBarBoxLength, onPrevHandler, onNextHandler } = props;
    
    return(
            <div className = "step-navigation-bar-container">
                {currentStepId > 1 && <button className="step-navigation-prev-btn" 
                                onClick = { () => { onPrevHandler({sourceId: currentStepId, targetId: currentStepId-1}) } }>Previous</button> }
                {currentStepId < navigationBarBoxLength && <button className="step-navigation-next-btn" 
                                onClick = { () => { onNextHandler({sourceId: currentStepId, targetId: currentStepId+1})} }>Next</button> }
            </div>
        )
}

const mapStateToProps = (store) => {
    return {
        currentStepId : store.stepNavigationBarReducerState.currentStepId,
        navigationBarBoxLength : store.navigationBarReducerState.navigationBarBoxLength,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPrevHandler : (navigationMetadataObj) => dispatch({type:'PREV_STEP_BUTTON_PRESSED', payload:navigationMetadataObj}),
        onNextHandler : (navigationMetadataObj) => dispatch({type:'NEXT_STEP_BUTTON_PRESSED', payload:navigationMetadataObj})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StepNavigationBarComponent)