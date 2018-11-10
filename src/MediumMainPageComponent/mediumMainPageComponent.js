import React, { Component } from 'react'
import './mediumMainPageComponent.css'

import MediumPageContentBoxComponent from './../MediumPageContentBoxComponent/mediumPageContentBoxComponent'

import { connect } from 'react-redux'

class MediumMainPageComponent extends Component{

    constructor(props){
        super(props);

        this.updateMediumPageContentComponentArr = this.updateMediumPageContentComponentArr.bind(this);

        this.isLastBoxOfContentBoxArr = this.isLastBoxOfContentBoxArr.bind(this);
        this.isFirstBoxOfContentBoxArr = this.isFirstBoxOfContentBoxArr.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    updateMediumPageContentComponentArr(mediumPageContentComponentArr){
        const { mediumPageContentObjArr, currentContentBoxCounter } = this.props;

        let endCounterIdx = (currentContentBoxCounter + 3) < mediumPageContentObjArr.length ? 
                            (currentContentBoxCounter + 3) : mediumPageContentObjArr.length - 1;


        for(let i=currentContentBoxCounter; i<= endCounterIdx; i++){
            const currentContentBox = mediumPageContentObjArr[i];
            const currentMediumPageContentBoxComponent = <MediumPageContentBoxComponent key = {currentContentBox.id} mediumPageBoxContent = { currentContentBox } />
            
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
        }
    }
    render(){

        const { openAddItemModal, 
                nextItemNavigationButtonHandler,
                prevItemNavigationButtonHandler } = this.props;

        let mediumPageContentComponentArr = [];
        this.updateMediumPageContentComponentArr(mediumPageContentComponentArr)

        this.redirect()
        return (
                <div className = "medium-main-page-content-box-container">
                    { !this.isFirstBoxOfContentBoxArr() && <div className = "medium-main-page-left-arrow-container" 
                            onClick = { () => {prevItemNavigationButtonHandler()} }></div> }

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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openAddItemModal: () => dispatch({type:'OPEN_ADD_ITEM_MODAL_BOX'}),
        prevItemNavigationButtonHandler: () => dispatch({type:'PREV_ITEM_NAV_BTN_CLICKED'}),
        nextItemNavigationButtonHandler: () => dispatch({type:'NEXT_ITEM_NAV_BTN_CLICKED'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediumMainPageComponent);