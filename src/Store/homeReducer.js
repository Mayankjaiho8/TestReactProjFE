
const initialState = {
    submittedAddNewPartFormObj : {},
    isAddNewPartButtonSubmittedFlag : false,
}
const homeReducer = (state = initialState, action) => {
    
    switch(action.type){
        case 'Add_NEW_PART_FORM_SUBMITTED':
            const internalAddNewFormObj = action.payload;
            
            return {
                ...state,
                submittedAddNewPartFormObj : internalAddNewFormObj,
                isAddNewPartButtonSubmittedFlag : true,
            }
        case 'ADD_NEW_PART_CUSTOMER_SUCCEEDED' :

            const currentPartBaseId = action.payload;

            return {
                ...state,
                currentPartBaseId,
            }

        default: 
            return state;
    }
}

export default homeReducer;