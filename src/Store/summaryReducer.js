const initialState = {
    successNote : '',
}

const summaryReducer = (state = initialState, action) =>{

    switch(action.type){
        case 'NOTIFICATION_SEND_SUCCEEDED' :
            const successNote = action.payload
            return {
                ...state,
                successNote,
            }
        default :
            return state;
    }
}

export default summaryReducer;