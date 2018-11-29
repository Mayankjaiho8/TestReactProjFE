import React from 'react';
import { connect } from 'react-redux';
import { sendNotificationToServer } from './../Store/ActionCreators/action';

const SummaryPageComponent = props => {

    const { currentStepId, history, sendNotification, userId, 
            successNote, publishNotificationReceival, notificationNum } = props;

    redirect(currentStepId, history);
    let webSocket;
    console.log('notificationNum ', notificationNum);
    if(userId == 2){
        console.log('userId in summary page component userId cond ', userId);
        webSocket = new WebSocket("ws://localhost:8080/socket/dangerousgoods")
        webSocket.onopen = (ev) => { onOpenHandler() };
        webSocket.onmessage = (ev) => { recieveNotification(ev, publishNotificationReceival, notificationNum) }
    }

    return(
        <React.Fragment>
            <div>This is SummaryPageComponent</div>
            <button onClick = { () => { sendNotification(userId) }  }>Send Notification</button>
            <div id="notificationArea">{ populateNotificationArea(successNote) } </div>
            <div id="recievedNotificationArea"></div>
        </React.Fragment>
    )
}

const onOpenHandler = ev => {
    console.log('connection opened .... ');
}
const recieveNotification = (ev, publishNotificationReceival, notificationNum) => {
    console.log('inside recieveNotification ....... ');
    let newNotification = ev.data;

    let recievedNotificationArea = window.document.getElementById('recievedNotificationArea');
    let oldNotifications = recievedNotificationArea.innerHTML;
    recievedNotificationArea.innerHTML = oldNotifications + newNotification + '<br/>'

    publishNotificationReceival(notificationNum + 1)

}


const populateNotificationArea = successNote => {
    let notificaitonArea = window.document.getElementById('notificationArea');
    if(notificaitonArea && successNote){
        let oldString = notificaitonArea.innerHTML;
        console.log('successNote ', successNote);
        let newString = oldString + ' ' + successNote + '<br/>';
        notificaitonArea.innerHTML = newString
    }
    

}

const redirect = (currentStepId, history) => {
    

    switch( currentStepId ){

        case 1:
            history.push('/');
            break;
        case 2:
            history.push('/propertyitem');
            break;
        case 3:
            history.push('/personaldetail')
            break;
        default:
    }
}


const mapStateToProps = (store) => {
    return {
        currentStepId : store.stepNavigationBarReducerState.currentStepId,
        userId : store.personalDetailReducerState.userId,
        successNote : store.summaryReducerState.successNote,
        notificationNum : store.appReducerState.notificationNum,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendNotification : (userId) => dispatch(sendNotificationToServer(userId)), 
        publishNotificationReceival : (notificationNum) => dispatch({type: 'NOTIFICATION_RECIEVED', payload : notificationNum}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryPageComponent);