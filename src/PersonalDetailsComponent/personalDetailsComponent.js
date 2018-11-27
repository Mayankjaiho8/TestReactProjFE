import React from 'react';
import { connect } from 'react-redux';


const PersonalDetailsComponent = props => {

    const { currentStepId, history } = props;

    redirect(currentStepId, history);
    
    var webSocket = new WebSocket("ws://localhost:8080/socket/rest/server-end-point");

    webSocket.onopen = processOpen();
    //webSocket.onclose = processClose(webSocket);
    //webSocket.onmessage = processMessage(webSocket);

    return(
        <div id = "personalDetail">
            <input type="text" name="socketSender" />
            <button onClick = { () => { processMessage(webSocket)} }>Send message</button>
            <button onClick = { () => { processClose(webSocket)} }>Close Connection message</button>
                This is Personal Details Page

            <div id="responseArea">

            </div>
        </div>

        
    )
}

const sendMessage = (webSocket, message) => {
    console.log('sending message to server ' + message);
    webSocket.send(message);
}

const processOpen = () => {

    console.log('inside processOpen window.document -> ', window.document);
    /*let message = 'Opening connection ...... ';

    let responseArea = window.document.getElementById('responseArea');

    let oldValue = responseArea.innerHTML;

    let newValue = oldValue + ' ' + message + '<br/>';

    responseArea.innerHTML = newValue;*/
    console.log('processing Open .... ');
}

const processClose = webSocket => {
    
    let message = 'Closing connection ...... ';

    let responseArea = window.document.getElementById('responseArea');

    let oldValue = responseArea.innerHTML;

    let newValue = oldValue + ' ' + message + '<br/>';

    responseArea.innerHTML = newValue;
    console.log('processing Close .... ');
}

const processMessage = websocket => {
    let message = window.document.getElementsByName('socketSender').value;

    if(message === 'close'){
        websocket.close();
        return;
    }
        
    sendMessage(websocket, message);

    let responseArea = window.document.getElementById('responseArea');

    let oldValue = responseArea.innerHTML;

    let newValue = oldValue + ' ' + message + '<br/>';

    responseArea.innerHTML = newValue;
    
    console.log('processing Message .... ');
}

const redirect = (currentStepId, history) => {
    

    switch( currentStepId ){

        case 1:
            history.push('/');
            break;
        case 2:
            history.push('/propertyitem');
            break;
        case 4:
            history.push('/summary')
    }
}

const mapStateToProps = (store) => {
    return {
        currentStepId : store.stepNavigationBarReducerState.currentStepId,
    }
}

export default connect(mapStateToProps)(PersonalDetailsComponent);