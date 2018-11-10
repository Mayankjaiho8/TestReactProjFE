import React from 'react';
import { connect } from 'react-redux';

const PersonalDetailsComponent = props => {

    const { currentStepId, history } = props;

    redirect(currentStepId, history);

    return(
        <div>This is Personal Details Page
        </div>
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
        case 4:
            history.push('/summary')
    }
}

const mapStateToProps = (store) => {
    return {
        currentStepId : store.stepNavigationBarReducerState.currentStepId,
    }
}

export default connect(mapStateToProps)(PersonalDetailsComponent);