import React from 'react';
import './mediumPageContentBoxComponent.css'

import { connect }  from 'react-redux';

const MediumPageContentBoxComponent = (props) => {

    const { mediumPageBoxContent, onRemoveButtonClick } = props;
    
    return (
        <div className = "medium-page-content-box fade">
            <div className = "medium-page-content-box-type-bar">{ mediumPageBoxContent.typeVal } - { mediumPageBoxContent.id }</div>
            <div className = "medium-page-content-box-property-content-bar-container">
                <div className = "medium-page-content-box-property-content-bar">Item 1 : { mediumPageBoxContent.item1 }</div>
                <div className = "medium-page-content-box-property-content-bar">Item 2 : { mediumPageBoxContent.item2 }</div>
                <div className = "medium-page-content-box-property-content-bar">Item 3 : { mediumPageBoxContent.item3 }</div>
                <div className = "medium-page-content-box-property-content-bar">Item 4 : { mediumPageBoxContent.item4 }</div>
                <div className = "medium-page-content-box-property-content-bar">Item 5 : { mediumPageBoxContent.item5 }</div>
            </div>
        <button className="medium-page-content-box-remove-btn" 
            onClick = {() => {onRemoveButtonClick(mediumPageBoxContent.id)}}>Remove</button>
            
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveButtonClick : (currentItemId) => dispatch({type:'REMOVE_ITEM_BUTTON_CLICKED', payload:currentItemId}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediumPageContentBoxComponent);