import axios from 'axios'
import { mediumPageContentObjArr } from './../../MockUpData/mockupData';

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
