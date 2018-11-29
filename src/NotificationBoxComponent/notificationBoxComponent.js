import React,{ Component } from 'react';

class NotificationBoxComponent extends Component {
    
    constructor(props){
        super(props);

        this.fadeAwayComponent = this.fadeAwayComponent.bind(this);
        this.closeNotificationBox = this.closeNotificationBox.bind(this);
    }

    componentDidMount(){
        setInterval(this.fadeAwayComponent, 4000);
    }

    fadeAwayComponent(){

        let notificationArray = window.document.querySelectorAll('.notification-box-container');

        let len = notificationArray.length;

        notificationArray[len -1].classList.add('fade')
    }

    closeNotificationBox(){
        let notificationArray = window.document.querySelectorAll('.notification-box-container');

        let len = notificationArray.length;

        notificationArray[len -1].style.display='none';
    }

    render(){
        const { notificationNum } = this.props;

        return(
            <div className = "notification-box-container">
                <button onClick = { this.closeNotificationBox} className = "close-btn">&times;</button>
                This is Notification # { notificationNum }
            </div>
        )
    }
    
}

export default NotificationBoxComponent;