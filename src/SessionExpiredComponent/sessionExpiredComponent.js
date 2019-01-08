import React, { Component } from 'react'

class SessionExpiredComponent extends Component{

    render(){
        return(
            <div>
                Session is expired. Please click <a href = "http://localhost:3000">here</a> to login again.
            </div>
        )
    }
}

export default SessionExpiredComponent;