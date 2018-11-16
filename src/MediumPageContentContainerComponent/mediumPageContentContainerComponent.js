import React from 'react';

const MediumPageContentContainerComponent = (props) => {

    return (
            <div className = "medium-main-page-component-container">
                { props.children }
            </div>
    )
}

export default MediumPageContentContainerComponent;