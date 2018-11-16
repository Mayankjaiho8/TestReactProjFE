import React from 'react';
import { Link } from 'react-router-dom';
import './dashboardNavigationBarComponent.css';

const DashboardNavigationBarComponent = (props) => {

    return(
        <div className="dashboard-navigation-bar-container">
            <Link to="/" className = "dashboard-button" >Add New Part</Link>
            <Link to = "/queue" className = "dashboard-button" >Queue</Link>
            <Link to = "/notification" className = "dashboard-button" >Notifications</Link>
        </div>
    )
}

export default DashboardNavigationBarComponent;