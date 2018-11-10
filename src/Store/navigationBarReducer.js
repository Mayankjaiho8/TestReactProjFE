import { navigationBarBoxObjArr } from './../MockUpData/mockupData';

const navigationBarBoxLength = navigationBarBoxObjArr.length;
const initialState = {
    navigationBarBoxObjArr,
    navigationBarBoxLength,
}

const navigationBarReducer = (state = initialState, action) =>{

    const navigationBarBoxObjArr =[...state.navigationBarBoxObjArr] ;

    let sourceIndex, targetIndex;

    switch(action.type){
        
        case 'PREV_STEP_BUTTON_PRESSED' :
        case 'NEXT_STEP_BUTTON_PRESSED' :
        case 'NAV_TO_COMPLETED_STEP_BTN_CLICKED' :
            sourceIndex = action.payload.sourceId;
            targetIndex = action.payload.targetId;
            navigationBarBoxObjArr[targetIndex-1].status = 'current';
            navigationBarBoxObjArr[sourceIndex-1].status = 'completed';
            
            return {
                ...state,
                navigationBarBoxObjArr
            }
        default :
            return {...state}
    }
}

export default navigationBarReducer;