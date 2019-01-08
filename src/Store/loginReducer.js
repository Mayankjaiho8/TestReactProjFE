const initialState = {
    username:'',
    password:'',
    loginAttemptFailed : false,
    windowHeight : null,
    loading:false,
    loggedIn : false,
    isSessionExpired : false,
    isLoggedOut : false,
}

const loginReducer = (state = initialState, action) => {

    switch(action.type){
        case 'UPDATE_USERNAME':
            const username = action.payload;
            return {
                ...state,
                username,
            }
        case 'UPDATE_PASSWORD':
            const password = action.payload;
            return {
                ...state,
                password,
            }
        case 'UPDATE_HEIGHT' :
            const windowHeight = action.payload;
            return {
                ...state,
                windowHeight,
            }
        case 'LOADING' :
            return {
                ...state,
                loading:true,
            }
        case 'VALIDATION_UNSUCCESSFUL' : 
            return {
                ...state,
                loading:false,
                loginAttemptFailed:true,
            }
        case 'VALIDATION_SUCCESSFUL' :
            const access_token  = action.payload;
            const authenticateInfoObj = {
                authenticateAt : (new Date()).getTime(),
                access_token, 
            }

            window.localStorage.setItem('authenticate', JSON.stringify(authenticateInfoObj));

            return {
                ...state,
                loading:false,
                loggedIn:true,
            }
        case 'LOGOUT':
            window.localStorage.removeItem('authenticate');
            return {
                ...state,
                isLoggedOut : true,
            }
        case 'SESSION_EXPIRED':
            window.localStorage.removeItem('authenticate');
            return {
                ...state,
                isSessionExpired : true,
            }
        default:
            const newIsSessionExpired = state.isSessionExpired && false;
            const newIsLoggedoutFlag = state.isLoggedOut && false;

            return {
                ...state,
                isSessionExpired: newIsSessionExpired,
                isLoggedOut : newIsLoggedoutFlag, 
            }
    }
}

export default loginReducer;