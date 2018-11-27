import React, { Component } from 'react';

import { connect } from 'react-redux'
import './../HomePageComponent/homePageComponent.css'

class AddNewPartFormComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            internalAddNewFormObj : {},
        }

        this.updateInternalFormObj = this.updateInternalFormObj.bind(this);
        this.submitAddNewPart = this.submitAddNewPart.bind(this);
    }

    submitAddNewPart(){
        if(this.validateAddNewForm()){
            this.props.submitAddNewPartForm(this.state.internalAddNewFormObj)
        }
    }

    validateAddNewForm(){
        const { partNumber, partclass, partstatus, boeingSpecPartNumberName }= this.state.internalAddNewFormObj
        
        return partNumber && partclass && partstatus && boeingSpecPartNumberName;
    }

    updateInternalFormObj(e){
        const currentValue = e.target.value;
        const { internalAddNewFormObj } = this.state;

        switch (e.target.name){
            case 'partNumber':
                internalAddNewFormObj.partNumber = currentValue
                this.setState({...this.state, internalAddNewFormObj,})
                break;
            case 'boeingSpecPartNumberName':
                internalAddNewFormObj.boeingSpecPartNumberName = currentValue
                this.setState({...this.state, internalAddNewFormObj,})
                break;
            case 'partstatus':
                internalAddNewFormObj.partstatus = currentValue
                this.setState({...this.state, internalAddNewFormObj,})
                break;
            case 'partclass':
                internalAddNewFormObj.partclass = currentValue
                this.setState({...this.state, internalAddNewFormObj,})
                break;
            default :
        }
    }

    render(){

        return(

            <div className="form-container">
            <div className="row">
                <div className="col-25">
                    <label htmlFor="partnumbertext">Part Number :</label>
                </div>
                <div className="col-75">
                    <input type="text" name="partNumber" onChange = { this.updateInternalFormObj } 
                        value = { this.state.partNumber } id = "partnumbertext" 
                        placeholder="Part Number"/>
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label htmlFor="boeinspecpartnumbertext">Boeing Spec Part Number :</label>
                </div>
                <div className="col-75">
                    <input type="text" id = "boeingspecpartnumbertext" 
                        onChange = { this.updateInternalFormObj } 
                        value = { this.state.boeingSpecPartNumberName } 
                        name="boeingSpecPartNumberName" placeholder="Boeing Spec Part Number" />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label style={{'float':'right'}}> Part Status :</label>
                </div>
                <div className="col-75">
                    <label>Repairable :</label>
                    <input type="radio" name="partstatus" 
                        value="repairable" onChange = { this.updateInternalFormObj }/>
                    <label>Rotable :</label>
                    <input type="radio" name="partstatus" value="rotable" 
                        onChange = { this.updateInternalFormObj } />
                </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <label>Part Class : </label>
                </div>
                <div className="col-75">
                    <select id = "partclassselect" name="partclass" onChange = {this.updateInternalFormObj }>
                        <option>Select</option>
                        <option value="Boeing Provided(BP)">Boeing Provided (BP)</option>
                        <option value="cfbm">CFBM</option>
                        <option value="cfcm">CFCM</option>
                        <option value="out of scope">Out Of Scope</option>
                    </select>
                    <div>
                        <button className="submit-btn" onClick = {this.submitAddNewPart}>Add New Part</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = store => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitAddNewPartForm : internalAddNewFormObj =>  dispatch({type:'Add_NEW_PART_FORM_SUBMITTED', payload: internalAddNewFormObj })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewPartFormComponent);