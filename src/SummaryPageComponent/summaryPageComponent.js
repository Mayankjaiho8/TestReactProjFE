import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { sendNotificationToServer } from './../Store/ActionCreators/action';

class SummaryPageComponent extends Component {

    constructor(props){
        super(props);

        this.redirect = this.redirect.bind(this);
        this.onOpenHandler = this.onOpenHandler.bind(this);
        this.populateNotificationArea = this.populateNotificationArea.bind(this);
        this.openSocketConnection = this.openSocketConnection.bind(this);
        this.recieveNotification = this.recieveNotification.bind(this);
        this.openSocketConnection = this.openSocketConnection.bind(this);
    }

    componentDidMount(){
        this.openSocketConnection();
    }

    redirect(currentStepId, history){
    
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

    onOpenHandler(ev){
        console.log('connection opened .... ');
    }

    recieveNotification(ev){
        //console.log('inside recieveNotification ....... ');
        const { notificationNum, publishNotificationReceival } = this.props;

        let newNotification = ev.data;
    
        let recievedNotificationArea = window.document.getElementById('recievedNotificationArea');
        if(recievedNotificationArea){
            let oldNotifications = recievedNotificationArea.innerHTML;
            recievedNotificationArea.innerHTML = oldNotifications + newNotification + '<br/>'
        }
        publishNotificationReceival(notificationNum + 1)
    }
    
    populateNotificationArea(successNote){
        let notificaitonArea = window.document.getElementById('notificationArea');
        if(notificaitonArea && successNote){
            let oldString = notificaitonArea.innerHTML;
            console.log('successNote ', successNote);
            let newString = oldString + ' ' + successNote + '<br/>';
            notificaitonArea.innerHTML = newString
        }
    }

    openSocketConnection(){
        const { userId, webSocket, setWebSocket } = this.props;
        console.log('webSocket in openConnection-> ', webSocket)
        if(userId == 2 && !webSocket){
            let newWebSocket = new WebSocket("ws://localhost:8080/socket/dangerousgoods");
            newWebSocket.onopen = (ev) => { this.onOpenHandler() };
            newWebSocket.onmessage = (ev) => { this.recieveNotification(ev)};
            newWebSocket.onclose = (ev) => { console.log('websocket connection closed')};

            setWebSocket(newWebSocket);
        }
    }

    closeConnection(){

        const { webSocket, unsetWebSocket } = this.props;
        if(webSocket)
            webSocket.close();
        
            unsetWebSocket();
    }

    render(){

        const { currentStepId, history, sendNotification, userId, 
                successNote } = this.props;

        this.redirect(currentStepId, history);

        return(
            <React.Fragment>
                <div>This is SummaryPageComponent</div>
                <button onClick = { () => { sendNotification(userId) }  }>Send Notification</button>
                <button onClick = { () => { this.closeConnection() }  }>Close Connection</button>
                <div id="notificationArea">{ this.populateNotificationArea(successNote) } </div>
                <div id="recievedNotificationArea"></div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (store) => {
    return {
        currentStepId : store.stepNavigationBarReducerState.currentStepId,
        userId : store.personalDetailReducerState.userId,
        successNote : store.summaryReducerState.successNote,
        notificationNum : store.appReducerState.notificationNum,
        webSocket : store.summaryReducerState.webSocket,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendNotification : (userId) => dispatch(sendNotificationToServer(userId)), 
        publishNotificationReceival : (notificationNum) => dispatch({type: 'NOTIFICATION_RECIEVED', payload : notificationNum}),
        setWebSocket : (newWebSocket) => dispatch({type:'SET_WEBSOCKET', payload:newWebSocket}),
        unsetWebSocket : () => dispatch({type: 'UNSET_WEBSOCKET'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryPageComponent);