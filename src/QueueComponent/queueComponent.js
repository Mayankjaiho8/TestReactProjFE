import React,{ Component } from 'react';
import './queueComponent.css';

import MediumPageContentContainerComponent from '../MediumPageContentContainerComponent/mediumPageContentContainerComponent';
import QueueTaskComponent from '../QueueTaskComponent/queueTaskComponent';
import TestComponent from './../TestComponent/testComponent';

import { getTasksObjFromServer, getQueryPointsFromServer, getQueryStoriesFromServer } from '../Store/ActionCreators/action';

import { connect } from 'react-redux';

class QueueComponent extends Component {

    componentDidMount(){
        const { userRole } = this.props;
        this.props.retrieveQueueTasks(userRole);

        this.props.getQueryPoints();
        this.props.getQueryStories();
    }

    render(){
        //const url = this.props.match.url;
        const queueTasksObjArr = [...this.props.queueTasksObjArr];
        const { ERROR_STR, querystories, querypoints, 
                loadingQueryStoriesFlag, loadingQueryPointsFlag } = this.props;
        const queueTasksComponentArr  = queueTasksObjArr.map(taskObj => {
            return <QueueTaskComponent key={ taskObj.taskTitle } taskObj={taskObj}  />
        })

        return (
                <MediumPageContentContainerComponent>
                    { ERROR_STR ? ERROR_STR : queueTasksComponentArr } 

                    <div className="query-story-point-container">
                        
                        <div className= "query-story-box">
                        { loadingQueryStoriesFlag &&  (<div className="loading-overlay">
                                                            <div className="flicker"></div>
                                                        </div>) }
                            <ul>
                                { querystories && querystories.map(queryStory => <li>{ queryStory }</li>)  }
                            </ul>
                        </div>
                        <div className = "query-point-box">
                        { loadingQueryPointsFlag &&  
                                        ( <div class="loading-overlay">
                                            <div className="flicker"></div>
                                        </div> ) }
                            <ul>
                                { querypoints && querypoints.map(queryPoint => <li>{ queryPoint }</li>) }
                            </ul>
                        </div>
                    </div>

                    <TestComponent />
                </MediumPageContentContainerComponent>
            )
        }
    
}

const mapStateToProps = (state) => {
    return {
        userRole: state.appReducerState.userRole,
        queueTasksObjArr: state.queueReducerState.queueTasksObjArr,
        ERROR_STR : state.queueReducerState.ERROR_STR,
        querystories: state.queueReducerState.querystories,
        querypoints: state.queueReducerState.querypoints,
        loadingQueryPointsFlag : state.queueReducerState.loadingQueryPointsFlag,
        loadingQueryStoriesFlag : state.queueReducerState.loadingQueryStoriesFlag,
    }
}

const mapDistpatchToProps = dispatch => {
    return {
        retrieveQueueTasks : (userRole) => dispatch(getTasksObjFromServer(userRole)),
        getQueryPoints: () => dispatch(getQueryPointsFromServer()),
        getQueryStories: () => dispatch(getQueryStoriesFromServer()),
    }
}

export default connect(mapStateToProps, mapDistpatchToProps)(QueueComponent);