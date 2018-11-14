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
                    <label for="firstname">First Name :</label>
                </div>
                <div className="col-75">
                    <input type="text" name="" value="" id = "firstname" placeholder="First Name"/>
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label for="lastname">Last Name :</label>
                </div>
                <div className="col-75">
                    <input type="text" name="" value="" id = "lastname" placeholder="Last Name" />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label style={{'float':'right'}}> Gender :</label>
                </div>
                <div className="col-75">
                    <label>Male :</label>
                    <input type="radio" name="gender" value="male" />
                    <label>Female :</label>
                    <input type="radio" name="gender" value="Femal" />
                </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <label>Hobbies : </label>
                </div>
                <div className="col-75">
                    <select id = "hobbies" name="hobbies">
                        <option value="swimming">Swimming</option>
                        <option value="fishing">Fishing</option>
                        <option value="travelling">Travelling</option>
                        <option value="sports">Sports</option>
                        <option value="coding">Coding</option>
                    </select>
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