import React from 'react';
import './mediumPageContentBoxComponent.css'

import { connect }  from 'react-redux';

const MediumPageContentBoxComponent = (props) => {

    const { mediumPageBoxContent, onRemoveButtonClick } = props;

    return (
        <div className = "medium-page-content-box fade">
            <div className = "medium-page-content-box-type-bar">Customer  - { mediumPageBoxContent['Customer Name'] }</div>
            <div className = "medium-page-content-box-property-content-bar-container">
                { getMediumPageContentBoxContentArr(mediumPageBoxContent) }
            </div>
        <button className="medium-page-content-box-remove-btn" 
            onClick = {() => {onRemoveButtonClick(mediumPageBoxContent.id)}}>Remove</button>
            
        </div>
    )
}

const getMediumPageContentBoxContentArr = (mediumPageBoxContent) => {
    let mediumPageContentBoxContentArr = [];

    for(let prop in mediumPageBoxContent){
        if(prop !== 'id'){

            let mediumPageContentBoxContent = (<div key = {prop} className = "medium-page-content-box-property-content-bar">
                                                 { prop } : { mediumPageBoxContent[prop] }
                                            </div>
                                        );

            mediumPageContentBoxContentArr.push(mediumPageContentBoxContent);
        }
        
    }

    return mediumPageContentBoxContentArr;
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