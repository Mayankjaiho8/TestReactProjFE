import React from 'react';
import { connect } from 'react-redux';


const PersonalDetailsComponent = props => {

    const { currentStepId, history, updateUserId, userId } = props;

    redirect(currentStepId, history, userId);
    
    let webSocket = new WebSocket("ws://localhost:8080/socket/serverendpoint");
    
    webSocket.onopen = processOpen();
    //webSocket.onclose = processClose(webSocket);
    webSocket.onmessage = (message) => {recieveMessage(message)}

    return(
        <div id = "personalDetail">
            <input type="text" name="socketSender" />
            <button onClick = { () => { processMessage(webSocket)} }>Send message</button>
            <button onClick = { () => { processClose(webSocket)} }>Close Connection message</button>
                This is Personal Details Page
            <input type="text" name="useridtext" onChange = { (e) => { updateUserId(e.target.value) }  } placeholder = "Enter UserID" />
            <div id="responseArea">

            </div>
        </div>

        
    )
}


const recieveMessage = message => {
    console.log('response from server ', message)

    let responseArea = window.document.getElementById('responseArea');

    let oldValue = responseArea.innerHTML;

    let newValue = oldValue + ' ' + message.data + '<br/>';

    responseArea.innerHTML = newValue;
}

const processOpen = () => {

    console.log('inside processOpen window.document -> ', window.document);
    console.log('processing Open .... ');
}

const processClose = webSocket => {
    
    let message = 'Closing connection ...... ';

    let responseArea = window.document.getElementById('responseArea');

    let oldValue = responseArea.innerHTML;

    let newValue = oldValue + ' ' + message + '<br/>';

    responseArea.innerHTML = newValue;
    console.log('processing Close .... ');
    webSocket.close();
}

const processMessage = websocket => {
    let message = window.document.getElementsByName('socketSender')[0].value;

    if(message === 'close'){
        websocket.close();
        return;
    }


    let responseArea = window.document.getElementById('responseArea');

    let oldValue = responseArea.innerHTML;

    let newValue = oldValue + ' ' + message + '<br/>';

    responseArea.innerHTML = newValue;
    
    console.log('processing Message .... ');
    websocket.send(message);
}

const redirect = (currentStepId, history, userId) => {
    

    switch( currentStepId ){
        case 1:
            history.push('/');
            break;
        case 2:
            history.push(`/propertyitem`);
            break;
        case 4:
            history.push(`/summary/${userId}`)
            break;
        default:
    }
}

const mapStateToProps = (store) => {
    return {
        currentStepId : store.stepNavigationBarReducerState.currentStepId,
        userId : store.personalDetailReducerState.userId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUserId : (userId) => dispatch({type:'UPDATE_USER_ID', payload:userId}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalDetailsComponent);