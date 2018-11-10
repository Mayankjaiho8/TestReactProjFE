import { combineReducers } from 'redux';
import appReducer from './appReducer';
import mediumMainPageReducer from './mediumMainPageReducer';
import navigationBarReducer from './navigationBarReducer';
import stepNavigationBarReducer from './stepNavigationBarReducer';

const reducer = combineReducers({
    appReducerState: appReducer,
    mediumMainPageReducerState:mediumMainPageReducer,
    navigationBarReducerState: navigationBarReducer,
    stepNavigationBarReducerState : stepNavigationBarReducer,
})

export default reducer;