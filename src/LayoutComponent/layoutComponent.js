import React,{Component} from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import LoginComponent from './../LoginComponent/loginComponent';
import SessionExpiredComponent from './../SessionExpiredComponent/sessionExpiredComponent';
import LoggedOutComponent from './../LoggedOutComponent/loggedOutComponent';

import App from './../App';

class LayoutComponent extends Component{

    constructor(props){
        super(props)
        this.state = {

        }
        this.userAuthenticated = this.userAuthenticated.bind(this);
        this.getLayoutComponent = this.getLayoutComponent.bind(this);
    }

    userAuthenticated(){
        let authenticateInfo = JSON.parse(localStorage.getItem('authenticate'));

        if(!authenticateInfo){
            return false;
        }
        return true;
    }

    getLayoutComponent({router, location}){
        const { isSessionExpired, isLoggedOut } = this.props;
        if(!this.userAuthenticated()){
            if(isSessionExpired){
                return <SessionExpiredComponent />
            }
            else if(isLoggedOut){
                return <LoggedOutComponent />
            }
            else{
                if(location.pathname != '/'){
                    window.location.pathname = '/'
                }
                return <LoginComponent />
                //return <Redirect to="/" />
                
            }
        }
        else {
            return <App />
        }
    }
    render(){
        return(
            <Router>
                <Route path ="/" render = {(props) => this.getLayoutComponent(props)} />
            </Router>
        )
    }
}

const mapStateToProps = store => {
    return {
        isSessionExpired : store.loginReducerState.isSessionExpired,
        isLoggedOut : store.loginReducerState.isLoggedOut,
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutComponent);