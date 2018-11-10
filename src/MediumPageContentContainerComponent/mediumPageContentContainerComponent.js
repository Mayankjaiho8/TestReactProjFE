import React from 'react';

import './mediumPageContentContainerComponent.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MediumMainPageComponent from './../MediumMainPageComponent/mediumMainPageComponent';
import HomePageComponent from './../HomePageComponent/homePageComponent';
import PersonalDetailsComponent from './../PersonalDetailsComponent/personalDetailsComponent';
import SummaryPageComponent from './../SummaryPageComponent/summaryPageComponent';

const MediumPageContentContainerComponent = (props) => {

    return (
        <Router>
            <div className = "medium-main-page-component-container">
                <Route exact path="/" component={ HomePageComponent } />
                <Route path="/propertyitem" component={ MediumMainPageComponent } />
                <Route path="/personaldetail" component={ PersonalDetailsComponent } />
                <Route path="/summary" component={ SummaryPageComponent } />
            </div>
        </Router>
    )
}

export default MediumPageContentContainerComponent;