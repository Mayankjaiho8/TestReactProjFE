const initialState = {
    notificationArr : [],

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
    /*const newNotObj = <NotificationBoxComponent key = { notificationNum } notificationNum = { notificationNum }
                    unMountChild = { this.unMountChild }/>*/
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