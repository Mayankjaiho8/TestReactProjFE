import React from 'react';
import { connect } from 'react-redux';

const SummaryPageComponent = props => {

    const { currentStepId, history } = props;

    redirect(currentStepId, history);

    return(
        <div>This is SummaryPageComponent</div>
    )
}

const redirect = (currentStepId, history) => {
    

    switch( currentStepId ){

        case 1:
            history.push('/');
            break;
        case 2:
            history.push('/propertyitem');
            break;
        case 3:
            history.push('/personaldetail')
    }
}

const mapStateToProps = (store) => {
    return {
        currentStepId : store.stepNavigationBarReducerState.currentStepId,
    }
}

export default connect(mapStateToProps)(SummaryPageComponent);;