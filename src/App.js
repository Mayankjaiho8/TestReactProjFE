import React, { Component } from 'react';
import './App.css';

import HeaderMainPageComponent from './HeaderMainPageComponent/headerMainPageComponent';

import DashboardNavigationBarComponent from './DashboardNavigationBarComponent/dashboardNavigationBarComponent';
import ModalBoxComponent from './ModalBoxComponent/modalBoxComponent';
import StepNavigationBarComponent from './StepNavigationBarComponent/stepNavigationBarComponent';
import AddNewPartComponent from './AddNewPartComponent/addNewPartComponent';
import QueueComponent from './QueueComponent/queueComponent';
import TaskPartComponent from './TaskPartComponent/taskPartComponent';
import NotificationContainerComponent from './NotificationContainerComponent/notificationContainerComponent';
import NotificationPageComponent from './NotificationPageComponent/notificationPageComponent';

import {BrowserRouter as Router, Route } from 'react-router-dom';

import { connect } from 'react-redux';

class App extends Component {

  render() {

    const { addItemModalBoxOpenFlag, notificationNum } = this.props;
    const { addItemModalBoxMetaDataInfoObj } = this.props;

    return (
      <div>
        <HeaderMainPageComponent />
        { addItemModalBoxOpenFlag && <ModalBoxComponent modalBoxMetaDataInfo = { addItemModalBoxMetaDataInfoObj }/>}
        <Router>
            <React.Fragment>
              <DashboardNavigationBarComponent />
              <Route path="/" exact render={ () => <AddNewPartComponent/>}/>
              <Route path="/queue" render={ () => <QueueComponent/> }/>
              <Route path="/task" render={ () => <TaskPartComponent /> }/>
              <Route path="/notification" render={ () => <NotificationPageComponent /> }/>
            </React.Fragment>
        </Router>
        <NotificationContainerComponent />
        <StepNavigationBarComponent/>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    addItemModalBoxMetaDataInfoObj : store.appReducerState.addItemModalBoxMetaDataInfoObj,
    addItemModalBoxOpenFlag : store.appReducerState.addItemModalBoxOpenFlag,
  }
}

export default connect(mapStateToProps)(App);
