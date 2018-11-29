import React from 'react'
import { connect } from 'react-redux';

import NotificationBoxComponent from './../NotificationBoxComponent/notificationBoxComponent';

import './notificationContainerComponent.css'

const NotificationContainerComponent = props => {
    const { notificationNum } = props;
    console.log('notificationNum in NotificationContainerComponent -> ', notificationNum)
    //appendNotificationComponent(notificationNum);
    return(
        <div id = "notificationContainerBox"></div>
    )
}

const appendNotificationComponent = notificationNum => {
    /*let notificationContainerBoxElem = window.document.getElementById('notificationContainerBox');
    let newNotificationBox = <NotificationBoxComponent notificationNum = { notificationNum }/>
    console.log('newNotificationBox -> ', newNotificationBox);

    if(notificationContainerBoxElem && notificationNum){
        notificationContainerBoxElem.appendChild(newNotificationBox);
    }*/
}

const mapStateToProps = store => {
    return {
        notificationNum : store.appReducerState.notificationNum,
    }
}

export default connect(mapStateToProps)(NotificationContainerComponent);