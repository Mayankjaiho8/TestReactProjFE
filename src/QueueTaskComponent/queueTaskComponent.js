import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const QueueTaskComponent = props => {
    
    const { taskObj } = props;
    const { taskTitle } = taskObj;

    const taskContainerStyleObj = {
                                    'padding':'6px 8px',
                                    'background':'grey',
                                     'margin':'0 auto 4px auto',
                                     'width':'90%'
                                    }
    return(
        <div style= {taskContainerStyleObj}>
            <Link style = {{'textDecoration':'none','color':'#dddddd',}} 
                to = "/task" onClick = { () => { props.setCurrentTask(taskObj) }}>{ taskTitle }</Link>
        </div>
    )
}

const mapStateToProps = store => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentTask : (taskObj) => dispatch({type:'QUEUE_TASK_CLICKED', payload: taskObj}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QueueTaskComponent);