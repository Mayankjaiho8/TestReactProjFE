import React, { Component } from 'react';
import MediumPageContentContainerComponent from '../MediumPageContentContainerComponent/mediumPageContentContainerComponent';
import NavigationBarComponent from '../NavigationBarComponent/navigationBarComponent';
import MediumMainPageComponent from './../MediumMainPageComponent/mediumMainPageComponent';
import HomePageComponent from './../HomePageComponent/homePageComponent';
import PersonalDetailsComponent from './../PersonalDetailsComponent/personalDetailsComponent';
import SummaryPageComponent from './../SummaryPageComponent/summaryPageComponent';

import {BrowserRouter as Router, Route} from 'react-router-dom';

class AddNewPartComponent extends Component{

    constructor(){
        super()
    }

    render(){
        
        return(
            <React.Fragment>
                <NavigationBarComponent />
                <MediumPageContentContainerComponent>
                    <Router > 
                        <React.Fragment>
                            <Route exact path="/" component={ HomePageComponent } />
                            <Route path="/propertyitem" component={ MediumMainPageComponent } />
                            <Route path="/personaldetail" component={ PersonalDetailsComponent } />
                            <Route path="/summary" component={ SummaryPageComponent } />
                        </React.Fragment>
                    </Router>
                </MediumPageContentContainerComponent>
            </React.Fragment>
        )
    }
}

export default AddNewPartComponent;