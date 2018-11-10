import { addItemModalBoxMetaDataInfoObj } from './../MockUpData/mockupData';

const initialAppState = {
    addItemModalBoxMetaDataInfoObj,
    addItemModalBoxOpenFlag:false,
}

const appReducer = (state=initialAppState, action) =>{
 
    switch(action.type){
    case 'OPEN_ADD_ITEM_MODAL_BOX':
        return {
            ...state,
            addItemModalBoxOpenFlag : true,
        }
    case 'CLOSE_ADD_ITEM_MODAL_BOX':
        return {
            ...state,
            addItemModalBoxOpenFlag : false
        }
    case 'ADD_ITEM_MODAL_BOX':
        return {
            ...state,
            addItemModalBoxOpenFlag : false,
    }
    default :
        return {...state};
    }
}

export default appReducer;