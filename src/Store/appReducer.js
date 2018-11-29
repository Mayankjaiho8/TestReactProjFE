import { addItemModalBoxMetaDataInfoObj } from './../MockUpData/mockupData';

const initialAppState = {
    addItemModalBoxMetaDataInfoObj,
    addItemModalBoxOpenFlag:false,
    userRole:'validator',
    notificationNum : 0,
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
    case 'NOTIFICATION_RECIEVED': 
        const notificationNum = action.payload;
        return {...state,
                notificationNum,
            }
    default :
        return {...state, };
    }
}

export default appReducer;