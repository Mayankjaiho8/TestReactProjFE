const initialState = {
    userId : 1
}

const personalDetailReducer = (state = initialState, action) => {
    
    switch(action.type){

        case 'UPDATE_USER_ID' :
            let userId = action.payload; 
            return {
                ...state,
                userId,
            }
        default :
            return state;
    }
}

export default personalDetailReducer;