import React from 'react';
import { connect } from 'react-redux';

import AddNewPartFormComponent from './../AddNewPartFormComponent/AddNewPartFormComponent'
import AddNewPartCustomerFormComponent from './../AddNewPartCustomerFormComponent/addNewPartCustomerFormComponent';

import './homePageComponent.css'

const HomePageComponent = props => {
    const { currentStepId, history, isAddNewPartButtonSubmittedFlag } = props;

    redirect(currentStepId, history);
    return (
        <React.Fragment>
            <AddNewPartFormComponent />
            { isAddNewPartButtonSubmittedFlag && <AddNewPartCustomerFormComponent /> }

            <div className="form-container">
                <div className="search-part-container">
                    <div className="row">
                        <div className="col-25">
                            <label>Enter Search Part Number :</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="searchparttext" placeholder="Enter Part Number"/>
                            <div>
                                <button className="submit-btn">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
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
        isAddNewPartButtonSubmittedFlag : store.homeReducerState.isAddNewPartButtonSubmittedFlag,
    }
}
export default connect(mapStateToProps)(HomePageComponent);