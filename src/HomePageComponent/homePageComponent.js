import React from 'react';
import { connect } from 'react-redux';

const HomePageComponent = props => {
    const { currentStepId, history } = props;

    redirect(currentStepId, history);
    return (
        <div>This is Home Page</div>
    )
}

const redirect = (currentStepId, history) => {
    
    switch( currentStepId ){

        case 2:
            history.push('/propertyitem');
            break;
        case 3:
            history.push('/personaldetail');
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
export default connect(mapStateToProps)(HomePageComponent);