import React,{ Component } from 'react';

import './notificationBoxComponent.css';

class NotificationBoxComponent extends Component {
    
    constructor(props){
        super(props);

        //this.fadeAwayComponent = this.fadeAwayComponent.bind(this);
        //this.closeNotificationBox = this.closeNotificationBox.bind(this);
        this.unMountChildHandler = this.unMountChildHandler.bind(this);
        this.addFadeClass = this.addFadeClass.bind(this);
    }

    componentDidMount(){
        setTimeout(() => { this.unMountChildHandler(this.props.notificationNum) }, 4000);
        //setTimeout(()=>{ this.addFadeClass() }, 3600);
    }

    /*fadeAwayComponent(){

        let notificationArray = window.document.querySelectorAll('.notification-box-container');

        let len = notificationArray.length;

        notificationArray[len -1].classList.add('fade')
    }*/

    /*closeNotificationBox(){
        let notificationArray = window.document.querySelectorAll('.notification-box-container');

        let len = notificationArray.length;

        notificationArray[len -1].style.display='none';
    }*/

    addFadeClass(){
        let notificationBoxDOMArr  = window.document.querySelectorAll('.notification-box-container');

        let len = notificationBoxDOMArr.length;

        notificationBoxDOMArr[len-1].classList.add('fade');
    }

    unMountChildHandler(notNum){
        this.props.unMountChild(notNum);
    }

    render(){
        const { notificationNum } = this.props;
        
        return(
            <div className = "notification-box-container fade">
                <button onClick = { () => { this.unMountChildHandler(this.props.notificationNum)}} className = "close-btn">&times;</button>
                This is Notification # { notificationNum }
            </div>
        )
    }
    
}

export default NotificationBoxComponent;