import React from 'react';

import './../sass/test.scss';

const TestComponent = props => {

    return (
        
        <div className="container">
            Hello Wassup !! This is Test Component

            <div className="nav-bar">
                <a href="">Link 1</a>
                <a href="">Link 2</a>
                <a href="">Link 3</a>
                <a href="">Link 4</a>
            </div>

            <h1>This is H1</h1>
        </div>

    )
}

export default TestComponent;