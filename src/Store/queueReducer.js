
const initialState = {
    queueTasksObjArr: [
        /*{
            "customerName": "Air India",
            "partBaseId": 1,
            "partNumber": "partName1",
            "taskTitle": "PN :partName1Part Validation for Customer Air India"
        }*/
    ],
    ERROR_STR : '',
    querypoints:null,
    querystories:null,
    loadingQueryStoriesFlag: false,
    loadingQueryPointsFlag: false,
}

const queueReducer = (state = initialState, action) => {

    switch(action.type){
        case 'RETRIEVE_TASK_OBJ_ARR':
            return {
                ...state,
                queueTasksObjArr: action.payload,
            }
        case 'ERR_IN_SERVER_RESPONSE':
            const ERROR_STR = action.payload;
            return {
                ...state,
                ERROR_STR,
            }
        case  'QUERY_POINTS_RECIEVED':
            let querypoints = null;
        if(action.payload)
             querypoints = [...action.payload];
            
             return {
                 ...state,
                 querypoints,
                 loadingQueryPointsFlag: false,
             }
        case 'QUERY_STORIES_RECIEVED':
            let querystories = null;
            if(action.payload)
                querystories = [...action.payload];
             
              return {
                  ...state,
                  querystories,
                  loadingQueryStoriesFlag:false,
              }
        case 'LOADING_QUERY_STORIES':
              return {
                  ...state,
                  loadingQueryStoriesFlag:true,
              }
        case 'LOADING_QUERY_POINTS':
              return {
                  ...state,
                  loadingQueryPointsFlag:true,
              }
        default :
            return state;
    }
}

export default queueReducer;

