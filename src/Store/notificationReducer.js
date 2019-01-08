const initialState = {
    notificationArr : [],
    notificationList : [],
    notificationFetchErr : '',
    imageObj : null,
}

const notificationReducer = (state = initialState, action)=> {
    
    switch(action.type){
        case 'NOTIFICATION_RECIEVED':
            const notificationNum1 = action.payload;
            const newNotificationArr1 = addNotificationNum(state.notificationArr, notificationNum1);

            return {
                ...state,
                notificationArr : newNotificationArr1,
            }
        case 'UNMOUNT_NOTIFICATION' : 
            const notificationNum2 = action.payload; 
            const newNotificationArr2 = unMountNotificationBox(state.notificationArr, notificationNum2);
            return {
                ...state,
                notificationArr : newNotificationArr2,
            }
        case 'NOTIFICATION_LIST_FETCHED' :
            const notificationList = action.payload;
            const newNotificationList = [...notificationList];
            return {
                ...state,
                notificationList : newNotificationList,
                notificationFetchErr : ''
            }
        case 'NOTIFICATION_LIST_FAIL':
            const err_msg = action.payload;
            return {
                ...state,
                notificationFetchErr : err_msg
            }
        case 'IMAGE_OBJ_FETCHED':
            const imageObj = action.payload;
            return {
                ...state,
                imageObj,
            }
        default :
            return state;
    }
}

const unMountNotificationBox = (notificationArr, notificationNum) => {

    let newNotificationArr = [...notificationArr];
    newNotificationArr = newNotificationArr.filter(notNum => notNum != notificationNum)
    
    return newNotificationArr;
}

const addNotificationNum = (notificationArr, notificationNum) => {

    let isPresentFlag = false;
    let newNotificationArr = [];

    newNotificationArr = [...notificationArr];

    for(let i=0; i< newNotificationArr.length ; i++){
        if(newNotificationArr[i] == notificationNum){
            isPresentFlag = true;
            break;
        }
    }

    if(!isPresentFlag){
        newNotificationArr.push(notificationNum);
    }

    return newNotificationArr;
}

export default notificationReducer;