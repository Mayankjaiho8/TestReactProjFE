
const taskReducer = (state = null, action) =>{
    
    switch(action.type){
        case 'QUEUE_TASK_CLICKED' :
            const currentTaskObj = action.payload;
            return {
                ...state,
                currentTaskObj,
            }
        case 'FETCHED_PART_BASE_SUPPLIER_DETAIL':
        console.log('inside taskReducer action.payload -> ', action.payload);
            const { partDetail, partSupplier} = action.payload;
            return {
                ...state,
                partDetail,
                partSupplier,
            }

        default : 
            return state;
    }
}

export default taskReducer;