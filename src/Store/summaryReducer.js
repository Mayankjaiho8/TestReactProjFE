const initialState = {
    successNote : '',
    webSocket: null,
}

const summaryReducer = (state = initialState, action) =>{

    switch(action.type){
        case 'NOTIFICATION_SEND_SUCCEEDED' :
            const successNote = action.payload
            return {
                ...state,
                successNote,
            }
        case 'SET_WEBSOCKET' :
            const newWebSocket = action.payload;
            return {
                ...state,
                webSocket : newWebSocket,
            }
        case 'UNSET_WEBSOCKET':
            return {
                ...state,
                webSocket : null,
            }
        default :
            return state;
    }
}

export default summaryReducer;