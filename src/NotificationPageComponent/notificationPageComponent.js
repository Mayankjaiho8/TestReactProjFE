import React,{ Component } from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { getNotificationListfromServer, getImageFromServer, getMovieDataFromServer } from './../Store/ActionCreators/action';
//import { testimage } from './../static/images/wallpaper1.jpg';
import './notificationPageComponent.css'

class NotificationPageComponent extends Component {

    constructor(props){
        super(props);
        this.redirectToLayoutPage = this.redirectToLayoutPage.bind(this);
    }

    componentDidMount(){
        const authenticateInfoObj = JSON.parse(window.localStorage.getItem('authenticate'));

        const access_token = authenticateInfoObj && authenticateInfoObj.access_token 
                                        ? authenticateInfoObj.access_token : ''; 
        this.props.getNotificationList(this.props.userId, access_token);
        this.props.getMovieData();
    }

    redirectToLayoutPage(){
        return <Redirect to='/'/>
    }

    redirectToSessionExpiredPage(){
        return <Redirect to='/sessionExpired'/>
    }

    redirectToLoggedOutPage(){
        return <Redirect to='/loggedout'/>
    }

    render(){
        const { notificationFetchErr, notificationList, isSessionExpired, isLoggedOut, imageObj } = this.props;
        const userAuthenticateObj = window.localStorage.getItem('authenticate');
        const videoURL = '//www.youtube.com/embed/lcwmDAYt22k?enablejsapi=1&autoplay=0&origin=https%3A%2F%2Fwww.themoviedb.org&hl=en-US&modestbranding=1&fs=1';

        if(!userAuthenticateObj){
            return this.redirectToLayoutPage();
        }
        else {
            
            return(
                <div>
                    {notificationFetchErr && <div className="error-msg">{ notificationFetchErr }</div>}
                    { imageObj && (
                        <div>
                            Title : {imageObj.Title}<br/>
                            Year : {imageObj.Year}
                            <img src = { imageObj.Poster } alt = { imageObj.Title }/>
                        </div>
                    )}
                    <iframe src = { videoURL }>

                    </iframe>
                    {notificationList && (
                        <ul>
                            { notificationList.map(notification => <li>{ notification }</li>) }
                        </ul>
                    )}

                    <div className="test">This is test text</div>
                </div>
            )
        }
    }
}

const mapStateToProps = store => {
    return {
        userId : store.personalDetailReducerState.userId,
        notificationList : store.notificationReducerState.notificationList,
        notificationFetchErr : store.notificationReducerState.notificationFetchErr,
        isSessionExpired : store.loginReducerState.isSessionExpired,
        isLoggedOut :  store.loginReducerState.isLoggedOut,
        imageObj : store.notificationReducerState.imageObj,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNotificationList : (userId, access_token) => dispatch(getNotificationListfromServer(userId, access_token)),
        getImage : (elem, imageName) => dispatch(getImageFromServer(elem, imageName)),
        getMovieData : () => dispatch(getMovieDataFromServer()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationPageComponent);