import React, { Component } from 'react'
import { connect } from 'react-redux';

import NotificationBoxComponent from './../NotificationBoxComponent/notificationBoxComponent';

import './notificationContainerComponent.css'

//import NotificationBoxWrapperComponent from './../NotificationBoxWrapperComponent/notificationBoxWrapperComponent'

class NotificationContainerComponent extends Component {

    constructor(props){
        super(props);

        this.unMountChild = this.unMountChild.bind(this);
        //this.addNotificationBox = this.addNotificationBox.bind(this);
        this.getNotificationBoxArr = this.getNotificationBoxArr.bind(this);
    }
    
    unMountChild(notificationNum){
        /*let newNotificationArr = [...this.state.notificationArr];
        newNotificationArr = newNotificationArr.filter(notificationBox => notificationBox.props.notificationNum != notificationNum)
        const newState = {...this.state, notificationArr:newNotificationArr} 
        this.setState(newState)*/

        this.props.unMountNotification(notificationNum);
    }

    getNotificationBoxArr(){
        const { notificationArr } = this.props;

        return notificationArr
                .map( notificationNum => (
                                            <NotificationBoxComponent key = { notificationNum } 
                                                notificationNum = { notificationNum }
                                                unMountChild = { this.unMountChild }/>
                                        )
                    )
    }
    /*addNotificationBox(notificationNum){
        const newNotObj = <NotificationBoxComponent key = { notificationNum } notificationNum = { notificationNum }
                        unMountChild = { this.unMountChild }/>
        let isPresentFlag = false;
        let newNotificationArr = [];

        if(this.state.notificationArr){
            newNotificationArr = [...this.state.notificationArr]
        }

        for(let i=0; i< newNotificationArr.length ; i++){
            if(newNotificationArr[i].key == notificationNum){
                isPresentFlag = true;
                break;
            }
        }

        if(!isPresentFlag){
            newNotificationArr.push(newNotObj);
            this.setState({...this.state, notificationArr : newNotificationArr})
        }
    }*/
    //appendNotificationComponent(notificationNum);
    
    /*if(notificationNum){
        newNavComponent = <NotificationBoxComponent key = { notificationNum } notificationNum = { notificationNum }/>
    }/*
    /*<NotificationBoxWrapperComponent newNavComponent = { newNavComponent }>
        </NotificationBoxWrapperComponent>*/
        render(){
            const { notificationNum, notificationArr } = this.props;
            //console.log('notificationNum in notification container component -> ', notificationNum);

            /*if(notificationNum){
                this.addNotificationBox(notificationNum)
            }*/

            return(
                <div id = "notificationContainer">
                    { this.getNotificationBoxArr() } 
                </div>
            )
        }
    
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
        //notificationNum : store.appReducerState.notificationNum,
        notificationArr : store.notificationReducerState.notificationArr,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        unMountNotification : (notificationNum) => dispatch({type:'UNMOUNT_NOTIFICATION', payload:notificationNum}),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainerComponent);