import React, { Component } from 'react'

class LoggedOutcomponent extends Component {

    render(){
        return(
            <div>User is successfully loggedout. Click <a href="http://localhost:3000">here</a> 
                to login again.</div>
        )
    }
}

export default LoggedOutcomponent;