
const initialState = {
    currentStepId: 1,
}

const stepNavigationBarReducer = (state = initialState, action) =>{

    let currentStepId;

    switch(action.type){
    
        case 'PREV_STEP_BUTTON_PRESSED' :
        case 'NEXT_STEP_BUTTON_PRESSED' :
        case 'NAV_TO_COMPLETED_STEP_BTN_CLICKED' :
            currentStepId = action.payload.targetId;
            return {
                ...state,
                currentStepId
            }
        case 'ADD_NEW_PART_CUSTOMER_SUCCEEDED' : 
            return {
                ...state,
                currentStepId : state.currentStepId + 1,
            }
        default :
            return {...state}
    }
}

export default stepNavigationBarReducer;