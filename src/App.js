import React, { Component } from 'react';
import './App.css';

import HeaderMainPageComponent from './HeaderMainPageComponent/headerMainPageComponent';
import MediumPageContentContainerComponent from './MediumPageContentContainerComponent/mediumPageContentContainerComponent';
import NavigationBarComponent from './NavigationBarComponent/navigationBarComponent';
import ModalBoxComponent from './ModalBoxComponent/modalBoxComponent';
import StepNavigationBarComponent from './StepNavigationBarComponent/stepNavigationBarComponent';

import { connect } from 'react-redux';

class App extends Component {

  render() {

    const { addItemModalBoxOpenFlag } = this.props;
    const { addItemModalBoxMetaDataInfoObj } = this.props;

    return (
      <div>
        <HeaderMainPageComponent />
        { addItemModalBoxOpenFlag && <ModalBoxComponent modalBoxMetaDataInfo = { addItemModalBoxMetaDataInfoObj }/>}
        <NavigationBarComponent />
        <MediumPageContentContainerComponent/>
        <StepNavigationBarComponent />
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
