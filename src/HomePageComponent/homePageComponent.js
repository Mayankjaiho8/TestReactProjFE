import React from 'react';
import { connect } from 'react-redux';

import './homePageComponent.css'

const HomePageComponent = props => {
    const { currentStepId, history } = props;

    redirect(currentStepId, history);
    return (
        <div className="form-container">
            <div className="row">
                <div className="col-25">
                    <label htmlFor="partnumbertext">Part Number :</label>
                </div>
                <div className="col-75">
                    <input type="text" name="partNumber" id = "partnumbertext" placeholder="Part Number"/>
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label htmlFor="boeinspecpartnumbertext">Boeing Spec Part Number :</label>
                </div>
                <div className="col-75">
                    <input type="text" id = "boeinspecpartnumbertext" name="boeinSpecPartNumberName" placeholder="Boeing Spec Part Number" />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label style={{'float':'right'}}> Part Status :</label>
                </div>
                <div className="col-75">
                    <label>Repairable :</label>
                    <input type="radio" name="partstatus" value="repairable" />
                    <label>Rotable :</label>
                    <input type="radio" name="partstatus" value="rotable" />
                </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <label>Part Class : </label>
                </div>
                <div className="col-75">
                    <select id = "partclassselect" name="partclass">
                        <option>Select</option>
                        <option value="Boeing Provided(BP)">Boeing Provided (BP)</option>
                        <option value="cfbm">CFBM</option>
                        <option value="cfcm">CFCM</option>
                        <option value="out of scope">Out Of Scope</option>
                    </select>
                    <div>
                        <button className="submit-btn">Add New Part</button>
                    </div>
                </div>
            </div>

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