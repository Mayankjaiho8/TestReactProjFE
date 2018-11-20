
const initialState = {
    queueTasksObjArr: [
        /*{
            "customerName": "Air India",
            "partBaseId": 1,
            "partNumber": "partName1",
            "taskTitle": "PN :partName1Part Validation for Customer Air India"
        }*/
    ],
}

const queueReducer = (state = initialState, action) => {

    switch(action.type){
        case 'RETRIEVE_TASK_OBJ_ARR':
            return {
                ...state,
                queueTasksObjArr: action.payload,
            }
        default :
            return state;
    }
}

export default queueReducer;

