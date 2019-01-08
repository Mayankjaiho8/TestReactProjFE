import React,{ Component } from 'react';
import { connect } from 'react-redux';

import './loginComponent.css';

import { validateInServer } from './../Store/ActionCreators/action';

class LoginComponent extends Component{

    constructor(props){
        super(props);

        this.handleSubmit =  this.handleSubmit.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.updateHeight = this.updateHeight.bind(this);
    }

    componentDidMount(){
        const height = window.innerHeight;
        this.updateHeight(height);
    }

    updateHeight(height){
        this.props.updateHeight(height)
    }

    handleSubmit(e){
        e.preventDefault();
        const { username, password } = this.props;
        this.props.validate(username, password)
    }

    updateInput(e){
        switch(e.target.name){
            case 'username':
                this.props.updateUsername(e.target.value);
                break;
            case 'password':
                this.props.updatePassword(e.target.value);
                break;
            default : 
        }
    }

    render(){
        const errorMsg = 'Either username or password is incorrect. Please check.';
        const { windowHeight } = this.props;

        const effectiveHeight = windowHeight ? windowHeight + 'px' : 'auto';
        const styleObject = {
            height : effectiveHeight
        }
        return(
            <div className="login-container" style={ styleObject }>
                <form className = "login-box" onSubmit = { (e) => { this.handleSubmit(e)}}>
                    { this.props.loginAttemptFailed && (
                            <div className="error-msg row"> 
                                { errorMsg } 
                            </div>
                    ) }
                    <div className="row1">
                        <div className="col1-25">
                            <label htmlFor="username" >Username : </label>
                        </div>
                        <div className="col1-75">
                            <input type="text" id = "username" value={this.props.username} 
                                onChange = {(e) => {this.updateInput(e)}} placeholder = "User Name" 
                                name = "username"/>
                        </div>
                    </div>
                    
                    <div className="row1">
                        <div className="col1-25">
                            <label htmlFor="password">Password :</label>
                        </div>
                        <div className="col1-75">
                            <input type="password" onChange = { (e) => {this.updateInput(e)} } 
                                placeholder = "Password" id = "password" name = "password"/><br/>
                        </div>
                    </div>

                    <div className="row1">
                        <input type="submit" value= "Submit" />
                        <input type="reset" value= "Reset" />
                    </div>
                </form>
            </div>
        );
    }
}


const mapStateToProps = store => {
    return {
        username : store.loginReducerState.username,
        password : store.loginReducerState.password,
        loginAttemptFailed : store.loginReducerState.loginAttemptFailed,
        windowHeight : store.loginReducerState.windowHeight,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUsername : username => dispatch({type:'UPDATE_USERNAME', payload : username}),
        updatePassword : password => dispatch({type: 'UPDATE_PASSWORD', payload: password}),
        updateHeight : height => dispatch({type:'UPDATE_HEIGHT', payload:height}),
        validate : ( username, password ) => dispatch(validateInServer(username, password)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);