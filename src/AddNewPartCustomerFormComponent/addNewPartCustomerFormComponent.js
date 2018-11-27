import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AddNewPartBaseCustomerToServer } from './../Store/ActionCreators/action';

import './../HomePageComponent/homePageComponent.css'; 

class AddNewPartCustomerFormComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            internalAddComponentFormObj : {},
        }

        this.updateInternalAddCustomerComponentFormObj = this.updateInternalAddCustomerComponentFormObj.bind(this);
        this.submitAddNewCustomerPart = this.submitAddNewCustomerPart.bind(this);
        this.validateAddNewCustomerForm = this.validateAddNewCustomerForm.bind(this);
    }

    updateInternalAddCustomerComponentFormObj(e){

        const currentValue = e.target.value;
        const { internalAddComponentFormObj } = this.state;
        //console.log(e);
        switch (e.target.name){
            case 'price':
                internalAddComponentFormObj.price = currentValue
                this.setState({...this.state, internalAddComponentFormObj,})
                break;
            case 'modelName':
                internalAddComponentFormObj.modelName = currentValue
                this.setState({...this.state, internalAddComponentFormObj,})
                break;
            case 'customerWantsRepair':
                internalAddComponentFormObj.customerWantsRepair = currentValue
                this.setState({...this.state, internalAddComponentFormObj,})
                break;
            case 'currency':
                internalAddComponentFormObj.currency = currentValue
                this.setState({...this.state, internalAddComponentFormObj,})
                break;
            case 'customerName':
                internalAddComponentFormObj.customerName = currentValue
                this.setState({...this.state, internalAddComponentFormObj,})
                break;
            default :
        }
    }

    submitAddNewCustomerPart(){

        const { submittedAddNewPartFormObj } = this.props;

        if(this.validateAddNewCustomerForm()){
            this.props.submitAddNewCustomerPartForm(submittedAddNewPartFormObj, this.state.internalAddComponentFormObj)
        }
    }

    validateAddNewCustomerForm(){

        const { price, modelName, customerWantsRepair, currency, customerName } = this.state.internalAddComponentFormObj
        
        return parseInt(price) && modelName && customerWantsRepair && currency && customerName;
    }

    render(){

        return(
            <div className="form-container">

                <div className="row">
                    <div className="col-25">
                        <label>Customer Name : </label>
                    </div>
                    <div className="col-75">
                        <select id = "customerNameSelect" name="customerName" 
                            onChange = {this.updateInternalAddCustomerComponentFormObj }>
                            <option>Select</option>
                            <option value="AIN">Air India</option>
                            <option value="BAW">British Airways</option>
                            <option value="NAI">Norwegian Airlines</option>
                            <option value="DAI">Delta Airlines</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label htmlFor="modelName">Model Name :</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id = "modelNameText" 
                            onChange = { this.updateInternalAddCustomerComponentFormObj } 
                            value = { this.state.modelName } name="modelName" placeholder="Model Name" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label style={{'float':'right'}}> Customer Wants Repair :</label>
                    </div>
                    <div className="col-75">
                        <label>Yes :</label>
                        <input type="radio" name="customerWantsRepair" value="Yes" 
                            onChange = { this.updateInternalAddCustomerComponentFormObj }/>
                        <label>No :</label>
                        <input type="radio" name="customerWantsRepair" value="No" 
                            onChange = { this.updateInternalAddCustomerComponentFormObj } />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label htmlFor="price">Price :</label>
                    </div>
                    <div className="col-75">
                        <input type="text" name="price" 
                            onChange = { this.updateInternalAddCustomerComponentFormObj } 
                            value = { this.state.price } id = "customerPricetext" placeholder="Price"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Currency : </label>
                    </div>
                    <div className="col-75">
                        <select id = "currencySelect" name="currency" 
                            onChange = {this.updateInternalAddCustomerComponentFormObj }>
                            <option>Select</option>
                            <option value="USD">US Dollars</option>
                            <option value="INR">Indian Rupees</option>
                            <option value="AUD">Australian Dollar</option>
                            <option value="GBP">Great Britain Pound</option>
                        </select>
                        <div>
                            <button className="submit-btn" onClick = { this.submitAddNewCustomerPart }>Add New Customer</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        submittedAddNewPartFormObj : store.homeReducerState.submittedAddNewPartFormObj,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitAddNewCustomerPartForm : (submittedAddNewPartFormObj, internalAddComponentFormObj) => dispatch(AddNewPartBaseCustomerToServer(submittedAddNewPartFormObj, internalAddComponentFormObj)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewPartCustomerFormComponent);