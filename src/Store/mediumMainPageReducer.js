//import { mediumPageContentObjArr} from './../MockUpData/mockupData';
import axios from 'axios';

const initialState = {
    mediumPageContentObjArr:[],
    currentContentBoxCounter:0,
}

const mediumMainPageReducer = (state = initialState, action) => {

    let { mediumPageContentObjArr, currentContentBoxCounter } = state;
    //console.log('Is this RETRIEVE_USER_ITEM -> ',action.type);
    switch(action.type) {
        case 'ADD_ITEM_MODAL_BOX':
            const itemObjToBeAdded = action.payload;

            if(itemObjToBeAdded){
                itemObjToBeAdded.id = mediumPageContentObjArr.length + 1;
                mediumPageContentObjArr.push(itemObjToBeAdded);
            }
            return {
                ...state,
                mediumPageContentObjArr,
            }
        case 'REMOVE_ITEM_BUTTON_CLICKED':
            
            const currentItemId = action.payload;
            mediumPageContentObjArr = mediumPageContentObjArr.filter(obj => obj.id !== currentItemId)
            return {
                ...state,
                mediumPageContentObjArr,
            }
        case 'PREV_ITEM_NAV_BTN_CLICKED':
            currentContentBoxCounter--;

            return {
                ...state,
                currentContentBoxCounter
            }
        case 'NEXT_ITEM_NAV_BTN_CLICKED':
            currentContentBoxCounter++;
            
            return {
                ...state,
                currentContentBoxCounter
            }
        case 'RETRIEVE_USER_ITEM' :
            const itemArrFromServer = action.payload;
            console.log('itemArrFromServer inside mediumMainPageReducer -> ', itemArrFromServer);
            return {
                ...state,
                mediumPageContentObjArr : itemArrFromServer
            }
        default : 
            return {...state}       
    }
}

export default mediumMainPageReducer;