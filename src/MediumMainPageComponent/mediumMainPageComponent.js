import React, { Component } from 'react'
import './mediumMainPageComponent.css'

import MediumPageContentBoxComponent from './../MediumPageContentBoxComponent/mediumPageContentBoxComponent'
import { getCustomerListForPartBaseIdFromServer } from './../Store/ActionCreators/action';

import { connect } from 'react-redux'

class MediumMainPageComponent extends Component{

    constructor(props){
        super(props);

        this.updateMediumPageContentComponentArr = this.updateMediumPageContentComponentArr.bind(this);

        this.isLastBoxOfContentBoxArr = this.isLastBoxOfContentBoxArr.bind(this);
        this.isFirstBoxOfContentBoxArr = this.isFirstBoxOfContentBoxArr.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    componentDidMount(){
        const { retrievePartCustomers } = this.props;
        
        retrievePartCustomers(this.props.currentPartBaseId);
    }

    updateMediumPageContentComponentArr(mediumPageContentComponentArr, mediumPageContentMetaData){
        
        const { currentContentBoxCounter, customerListArr } = this.props;
        let currentMediumPageContentBoxComponent;

        let endCounterIdx = (currentContentBoxCounter + 3) < customerListArr.length ? 
                            (currentContentBoxCounter + 3) : customerListArr.length - 1;

        for(let i=currentContentBoxCounter; i<= endCounterIdx; i++){

            const currentCustomerListObj = customerListArr[i];
            let currentMediumPageContentObj = {};
            currentMediumPageContentObj.id = i;
            for(let metaProp of mediumPageContentMetaData){

                switch(metaProp){
                    case 'Customer Name':
                        currentMediumPageContentObj[metaProp] = currentCustomerListObj['customerName'];
                        break;
                    case 'Model Name':
                        currentMediumPageContentObj[metaProp] = currentCustomerListObj['modelName'];
                        break;
                    case 'Customer Wants Repair':
                        currentMediumPageContentObj[metaProp] = currentCustomerListObj['customerWantsRepair'];
                        break;
                    case 'Price':
                        currentMediumPageContentObj[metaProp] = currentCustomerListObj['price'];
                        break;
                    case 'Currency':
                        currentMediumPageContentObj[metaProp] = currentCustomerListObj['currency'];
                        break;
                }

                currentMediumPageContentBoxComponent = (
                            <MediumPageContentBoxComponent key = {currentMediumPageContentObj.id }
                                mediumPageBoxContent = { currentMediumPageContentObj } />
                        )
            }

            mediumPageContentComponentArr.push(currentMediumPageContentBoxComponent); 
        }
    }

    isLastBoxOfContentBoxArr(){

        let { currentContentBoxCounter } = this.props;
        let length = this.props.mediumPageContentObjArr.length;

        return currentContentBoxCounter + 3 >= length -1;
    }

    isFirstBoxOfContentBoxArr(){

        let { currentContentBoxCounter } = this.props;
        return currentContentBoxCounter === 0;
    }

    redirect(){
        const { currentStepId, history } = this.props;

        switch( currentStepId ){

            case 1:
                history.push('/');
                break;
            case 3:
                history.push('/personaldetail');
                break;
            case 4:
                history.push('/summary')
            default :

        }
    }
    render(){

        const { openAddItemModal, 
                nextItemNavigationButtonHandler,
                prevItemNavigationButtonHandler,
            } = this.props;
            
        let mediumPageContentComponentArr = [];
        let customerListMetaDataArr = ["Customer Name", "Model Name", "Customer Wants Repair", "Price", "Currency"]
        this.updateMediumPageContentComponentArr(mediumPageContentComponentArr, customerListMetaDataArr)
        
        this.redirect();
        
        return (
                <div className = "medium-main-page-content-box-container">
                    { !this.isFirstBoxOfContentBoxArr() && 
                        <div className = "medium-main-page-left-arrow-container" 
                            onClick = { () => { prevItemNavigationButtonHandler() } }></div> }

                    <div className = "medium-main-page-content-box-inside-wrapper-container">
                        <button id="addItemBtn" onClick = { openAddItemModal } >Add Item</button>
                        { mediumPageContentComponentArr }
                    </div>

                    { !this.isLastBoxOfContentBoxArr() && <div className = "medium-main-page-right-arrow-container" 
                            onClick = { () => { nextItemNavigationButtonHandler() } }></div> }
                </div>
        );
    };
    
}

const mapStateToProps = (store) => {
    return {
        mediumPageContentObjArr : store.mediumMainPageReducerState.mediumPageContentObjArr,
        currentContentBoxCounter : store.mediumMainPageReducerState.currentContentBoxCounter,
        currentStepId : store.stepNavigationBarReducerState.currentStepId,
        currentPartBaseId : store.homeReducerState.currentPartBaseId,
        customerListArr : store.mediumMainPageReducerState.customerListArr,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openAddItemModal: () => dispatch({type:'OPEN_ADD_ITEM_MODAL_BOX'}),
        prevItemNavigationButtonHandler: () => dispatch({type:'PREV_ITEM_NAV_BTN_CLICKED'}),
        nextItemNavigationButtonHandler: () => dispatch({type:'NEXT_ITEM_NAV_BTN_CLICKED'}),
        retrievePartCustomers : (currentPartBaseId) => dispatch(getCustomerListForPartBaseIdFromServer(currentPartBaseId)),
                                    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediumMainPageComponent);