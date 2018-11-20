import { combineReducers } from 'redux';
import appReducer from './appReducer';
import mediumMainPageReducer from './mediumMainPageReducer';
import navigationBarReducer from './navigationBarReducer';
import stepNavigationBarReducer from './stepNavigationBarReducer';
import queueReducer from './queueReducer';
import taskReducer from './taskReducer';

const reducer = combineReducers({
    appReducerState: appReducer,
    mediumMainPageReducerState:mediumMainPageReducer,
    navigationBarReducerState: navigationBarReducer,
    stepNavigationBarReducerState : stepNavigationBarReducer,
    queueReducerState : queueReducer,
    taskReducerState : taskReducer,
})

export default reducer;