import React from 'react';
import { Link } from 'react-router-dom';
import './dashboardNavigationBarComponent.css';

import { connect } from 'react-redux';

const DashboardNavigationBarComponent = (props) => {

    
    const queueLength = !props.queueTasksObjArr || !props.queueTasksObjArr.length ? 0 : props.queueTasksObjArr.length;

    return(
        <div className="dashboard-navigation-bar-container">
            <Link to="/" className = "dashboard-button" >Add New Part</Link>
            <Link to = "/queue" className = "dashboard-button" >Queue ({ queueLength })</Link>
            <Link to = "/notification" className = "dashboard-button" >Notifications</Link>
        </div>
    )
}

const mapStateToProps = store => {
    return {
        queueTasksObjArr : store.queueReducerState.queueTasksObjArr
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps )(DashboardNavigationBarComponent);