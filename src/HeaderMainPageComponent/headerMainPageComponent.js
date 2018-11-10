import React from 'react'
import './headerMainPageComponent.css';

const HeaderMainPageCompoennt = (props) =>{
    const buttonArray = ['Button1', 'Button2'].map((button) => <button key={button}>{button}</button>)

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

export default HeaderMainPageCompoennt;