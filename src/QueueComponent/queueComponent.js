import React,{ Component } from 'react';

import MediumPageContentContainerComponent from '../MediumPageContentContainerComponent/mediumPageContentContainerComponent';
import QueueTaskComponent from '../QueueTaskComponent/queueTaskComponent';

import { getTasksObjFromServer } from '../Store/ActionCreators/action';

import { connect } from 'react-redux';

class QueueComponent extends Component {

    componentDidMount(){
        const { userRole } = this.props;
        this.props.retrieveQueueTasks(userRole);
    }

    render(){
        //const url = this.props.match.url;
        const queueTasksObjArr = [...this.props.queueTasksObjArr];
        const { ERROR_STR } = this.props;
        const queueTasksComponentArr  = queueTasksObjArr.map(taskObj => {
            return <QueueTaskComponent key={ taskObj.taskTitle } taskObj={taskObj}  />
        })

        return (
                <MediumPageContentContainerComponent>
                    { ERROR_STR ? ERROR_STR : queueTasksComponentArr } 
                </MediumPageContentContainerComponent>
            )
        }
    
}

const mapStateToProps = (state) => {
    return {
        userRole: state.appReducerState.userRole,
        queueTasksObjArr: state.queueReducerState.queueTasksObjArr,
        ERROR_STR : state.queueReducerState.ERROR_STR,
    }
}

const mapDistpatchToProps = dispatch => {
    return {
        retrieveQueueTasks : (userRole) => dispatch(getTasksObjFromServer(userRole)),
    }
}
export default connect(mapStateToProps, mapDistpatchToProps)(QueueComponent);