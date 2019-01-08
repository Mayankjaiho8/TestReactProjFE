import React, { Component } from 'react'
import { connect } from 'react-redux'

import './headerMainPageComponent.css';

class HeaderMainPageCompoennt extends Component{

    constructor(props){
        super(props)
    }
    
    handleButtonClickEvent(e){
        console.log('e.target.name -> ', e.target.name)
        if(e.target.name === 'Logout'){
            this.props.logout();
        }
    }

    render(){
        const buttonArray = ['Button1', 'Logout'].map((button) => 
            <button name = { button } onClick = { (e) => { this.handleButtonClickEvent(e) } } 
            key={button}>{button}</button>
        )

        return (
            <div className = "header-main-page">
                <div className="logo-header-container">fsdfsd
                </div>
                <div className = "button-container">
                    { buttonArray }
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = store => {
    return {
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout:() => dispatch({type:'LOGOUT'}) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMainPageCompoennt);