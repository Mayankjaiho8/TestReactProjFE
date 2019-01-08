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
        .then(response => dispatch(getSendNotificationActionCreator(response)))
    }

    const getValidationActionCreator = (headers) => {
        
        const { authorization } = headers;
        if(!authorization){
            return {
                type:'VALIDATION_UNSUCCESSFUL',
            }
        }

        return {
            type:'VALIDATION_SUCCESSFUL',
            payload:authorization.substring('Bearer'.length).trim(),
        }
    }

    export const validateInServer = (username, password) => dispatch => {
        const VALIDATE_URL = `http://localhost:8080/TestReactProj/webapi/testresource/validate`;
        
        dispatch({type:'LOADING'});
        const requestBody = `username=${username}&password=${password}`
        const config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        axios.post(VALIDATE_URL, requestBody, config)
        .then(res => res.headers)
        .then(headers => dispatch(getValidationActionCreator(headers)))
        .catch(err => dispatch(getValidationActionCreator(err)))
    }

    const getNotificationListSuccessActionCreator = notificationList => {
        return {
            type : 'NOTIFICATION_LIST_FETCHED',
            payload : notificationList,
        }
    }

    const getNotificationListErrorActionCreator = err => {
        //console.log('err.response ->', err.response)
        if(err.response.status == '401'){
            return {
                type : 'SESSION_EXPIRED',    
            }
        }
        return {
            type : 'NOTIFICATION_LIST_FAIL',
            payload : err.response.data,
        }
    }

    export const getNotificationListfromServer = (userId, access_token) => dispatch => {

        const NOTIFICATION_FETCH_URL = `http://localhost:8080/TestReactProj/webapi/testresource/${userId}/notifications`;

        const config = {
            headers: {
                'Authorization': `Bearer ${access_token}`,
            }
        }

        axios({
            method:'GET',
            url: NOTIFICATION_FETCH_URL,
            headers : {
                'Authorization': `Bearer ${access_token}`,
            }
        })
        .then(res => res.data)
        .then(notificationList => dispatch(getNotificationListSuccessActionCreator(notificationList)))
        .catch(err => dispatch(getNotificationListErrorActionCreator(err)))
    }

    export const getImageFromServer = (img, imageName) => dispatch => {
        const URL = "http://localhost:8080/TestReactProj/webapi/testresource/static/images/stream"

        const config = {
            headers : {
                'Range': 'bytes=0-4055'
            },
            params : {
                'filename':imageName,
            }
        }
        let URL_win = window.URL;
        //console.log('Url_win',window.URL.createObjectURL({}))
        if(img){
            loadImage(img, URL, config);
        }
        
        /*axios.get(URL, config)
        .then(res => { console.log('res',res);
                         if(img){
                                let blobArr = [];
                                let ContentRange = res.headers['Content-Range'];
                                let ContentLength = res.headers['Content-Length'];
                                let toByte = ContentRange.split
                                while()
                            img.src = window.URL.createObjectURL(new Blob([res.data], {type: "image/jpeg"}))
                         }
                    })*/
        //.then(image => )
    }
    
    const loadImage = async (img, URL, config) => {
        let headPromiseResponse = await axios.head(URL, config);
        let fileLength = headPromiseResponse.headers['content-length'];
        console.log('fileLength', fileLength)
        let chunk_size = Math.floor(parseInt(fileLength)/10);
        let endByte = 0;
        let startByte = 0;
        let imageLoadCompleteFlag = false;
        while(!imageLoadCompleteFlag){
            let blobObjArr = [];

            let imageChunkPromiseResponse = await axios.get(URL,config)

            blobObjArr.push(imageChunkPromiseResponse.data);
            let blobObj = new Blob(blobObjArr, {type:'image/jpeg'});
            img.src = blobObj;
            //startByte = imageChunkPromiseResponse.headers['Content-Range'].split('=')[1].split('-')[0];
            endByte = imageChunkPromiseResponse.headers['content-range'].split('=')[1].split('-')[1];

            if(parseInt(endByte) >= parseInt(fileLength)-1)
                break;

            startByte = parseInt(endByte)+1;
            endByte = startByte+chunk_size;
            
            console.log('startByte, endByte -> ',startByte, endByte)

            let newHeaders = {
                'Range' : `bytes=${startByte}-${endByte}`
            }
            config.headers = newHeaders;
        }
    }

    const getMovieDataObjActionCreator = (imageObj) => {
        if(!Object.keys(imageObj).length){
            imageObj = null
        }
        
        return {
            type:'IMAGE_OBJ_FETCHED',
            payload : imageObj,
        }
    }

    export const getMovieDataFromServer = () => dispatch => {
        const URL = 'http://www.omdbapi.com/?t=titanic&plot=full&apikey=d44ca388';
        
        axios.get(URL)
        .then(res => res.data)
        .then(imageObj => dispatch(getMovieDataObjActionCreator(imageObj)))
    }