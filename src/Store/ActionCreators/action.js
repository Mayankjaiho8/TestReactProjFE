import axios from 'axios'

const BASE_URL = `http://localhost:8080/testreact/webapi`;

const getErrorObjActionCreator = () => {
    return {
        type:'ERR_IN_SERVER_RESPONSE',
        payload: 'Something went wrong. Check the console log by pressing F12.'
    }
}
const getUserItemsFetchSuccess = (items) =>{
    return {
        type:'RETRIEVE_USER_ITEM',
        payload:items,
    }
}

export const getUserItemsFromServer = id  => dispatch => {
    let itemPromise = axios.get(`http://localhost:8080/testreact/webapi/testresource/${id}`)
    itemPromise
    .then(response => response.data)
    .then(items => dispatch(getUserItemsFetchSuccess(items)))
};

const getTaskObjActionCreator = (taskObjArr) => {
    return {
        type:'RETRIEVE_TASK_OBJ_ARR',
        payload: taskObjArr
    }
}

export const getTasksObjFromServer = userRole => dispatch => {
    let taskObjPromise = axios.get(`http://localhost:8080/testreact/webapi/taskresource/tasks/${userRole}`);

    taskObjPromise
    .then((res) => res.data.tasks)
    .then(taskObjArr => dispatch(getTaskObjActionCreator(taskObjArr)))
    .catch(err => dispatch(getErrorObjActionCreator()));

}

const getPartBaseSupplierDetailActionCreator = (partDetail, partSupplier) => {
    return {
        type:'FETCHED_PART_BASE_SUPPLIER_DETAIL',
        payload:{
                partDetail, 
                partSupplier
            }
    }
}

export const getPartBaseSupplierDetailFromServer = partName => dispatch => {
    //const BASE_URL = `http://localhost:8080/testreact/webapi`
    const PART_BASE_URL = `${BASE_URL}/partresource/partname/${partName}`
    const PART_SUPPLIER_URL = `${BASE_URL}/partsupplierresource/partname/${partName}`

    let getPartBaseSupplierPromise = axios.all([
                                                axios.get(PART_BASE_URL),
                                                axios.get(PART_SUPPLIER_URL)
                                            ])
                                            
    getPartBaseSupplierPromise.then(axios.spread((partbaseResp, partsupplierResp) => {
            dispatch(getPartBaseSupplierDetailActionCreator(partbaseResp.data, partsupplierResp.data));
    }))

}

export const AddNewPartBaseCustomerToServer = (submittedAddNewPartFormObj, submittedAddComponentFormObj) => dispatch => {
        
    const ADD_PART_BASE_CUSTOMER_URL = `${BASE_URL}/partresource`;
    
    const partBase = submittedAddNewPartFormObj;
    partBase.partCustomer = submittedAddComponentFormObj;

    let addPartBaseCustomerPromise = axios.post(ADD_PART_BASE_CUSTOMER_URL, partBase);

    addPartBaseCustomerPromise
    .then(response => response.data)
    .then(response => dispatch({type:'ADD_NEW_PART_CUSTOMER_SUCCEEDED', payload:response}))
    .catch(err => dispatch(getErrorObjActionCreator()))

    }

    const getPartCustomerListActionCreator = customerListArr => {
        return {
            type:'CUSTOMER_LIST_FOR_CURRENT_PART_BASE_ID_FETCHED',
            payload : customerListArr,
        }
    }
    export const getCustomerListForPartBaseIdFromServer = currentPartBaseId => dispatch => {

        const GET_PART_CUSTOMERS_URL = `${BASE_URL}/partresource/partbase/${currentPartBaseId}/partcustomer`;
        
        let getPartCustomerForPartBaseIdPromise = axios.get(GET_PART_CUSTOMERS_URL);

        getPartCustomerForPartBaseIdPromise
        .then(response => response.data)
        .then(response => dispatch(getPartCustomerListActionCreator(response.partCustomerList)))
        .catch(err => err)
    }

    const getSendNotificationActionCreator = response => {
        return {type:'NOTIFICATION_SEND_SUCCEEDED', payload:response};
    }


    export const sendNotificationToServer = userId => dispatch => {
        const SEND_NOTIFICATION_URL = `${BASE_URL}/partresource/sendnotification/${userId}`;
        axios.get(SEND_NOTIFICATION_URL)
        .then(response => response.data)
        .then(response => { console.log('return response -> ', response); return dispatch(getSendNotificationActionCreator(response)) })
    }