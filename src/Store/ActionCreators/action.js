import axios from 'axios'

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
    .then(taskObjArr => dispatch(getTaskObjActionCreator(taskObjArr)));

}

const getPartBaseSupplierDetailActionCreator = (partDetail, partSupplier) => {
    return {
        type:'FETCHED_PART_BASE_SUPPLIER_DETAIL',
        payload:{
                partDetail, 
                partSupplier}
    }
}

export const getPartBaseSupplierDetailFromServer = partName => dispatch => {
    const BASE_URL = `http://localhost:8080/testreact/webapi`
    const PART_BASE_URL = `${BASE_URL}/partresource/partname/${partName}`
    const PART_SUPPLIER_URL = `${BASE_URL}/partsupplierresource/partname/${partName}`

    let getPartBaseSupplierPromise = axios.all([
                                                axios.get(PART_BASE_URL),
                                                axios.get(PART_SUPPLIER_URL)
                                            ])
                                            
    getPartBaseSupplierPromise.then(axios.spread((partbaseResp, partsupplierResp) => {
            dispatch(getPartBaseSupplierDetailActionCreator(partbaseResp.data, partsupplierResp.data));
    }))
                        

    /*getPartBaseSupplierPromise
    .then(res => res.data)
    .then(partDetail => dispatch(getPartDetailActionCreator(partDetail)))
    .catch(err =>  err)*/
}