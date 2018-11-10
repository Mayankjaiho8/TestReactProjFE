import React, { Component } from 'react';
import './modalBoxComponent.css'

import { connect } from 'react-redux';

class ModalBoxComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            localCurrentItemModalBoxObj : {}
        }

        this.updateItemAttributeFunc = this.updateItemAttributeFunc.bind(this);
    }

    updateItemAttributeFunc(event){

        const targetValue = event.nativeEvent.target.value;
        const { localCurrentItemModalBoxObj } = this.state;
        
        switch(event.target.name){
            case 'itemType':
                localCurrentItemModalBoxObj.typeVal = targetValue;
                break;
            case 'item1':
                localCurrentItemModalBoxObj.item1 = targetValue;
                break;
            case 'item2':
                localCurrentItemModalBoxObj.item2 = targetValue;
                break;
            case 'item3':
                localCurrentItemModalBoxObj.item3 = targetValue;
                break;
            case 'item4':
                localCurrentItemModalBoxObj.item4 = targetValue;
                break;
            case 'item5':
                localCurrentItemModalBoxObj.item5 = targetValue;
        }

        this.setState({
            ...this.state,
            localCurrentItemModalBoxObj
        })
    }

    render(){
        const { modalBoxMetaDataInfo, closeAddItemModalBoxFunc, addItemModalBoxFunc } = this.props;
        const { localCurrentItemModalBoxObj } = this.state;

        const modelBoxInfoContentItemArr  = modalBoxMetaDataInfo.formAttributesObjArr
                                        .map(formAttr => <div key = { formAttr.label } className = "modal-box-content-attribute-item">
                                            { formAttr.label } - 
                                            <input type="text" onChange = { this.updateItemAttributeFunc }
                                            name = { formAttr.inputBoxName }/>
                                        </div>)

        return(
            <React.Fragment>
                <div className="modal-box-screen-wrapper"></div>
                <div className="modal-box-container">
                    <div className = "modal-header">
                        <button className="close-btn" onClick ={ closeAddItemModalBoxFunc }>&times;</button>
                        { modalBoxMetaDataInfo.title }
                    </div>
                    <div className = "modal-box-content">
                        { modelBoxInfoContentItemArr }
                    </div>
                    <div className="modal-box-footer">
                        <button className="modal-submit-btn" onClick={ () => { addItemModalBoxFunc(localCurrentItemModalBoxObj)} }>Add</button>
                        { modalBoxMetaDataInfo.footer }
                    </div>
                </div>
            </React.Fragment>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        closeAddItemModalBoxFunc : () => dispatch({type:'CLOSE_ADD_ITEM_MODAL_BOX'}),
        addItemModalBoxFunc: (itemObjToBeAdded) => dispatch({type:'ADD_ITEM_MODAL_BOX', payload:itemObjToBeAdded})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalBoxComponent);