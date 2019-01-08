import React, { Component } from 'react';

class TestComponent extends Component {

        constructor(){
            super();
            this.state = {
                clicked : false
            }
            this.changeDOM = this.changeDOM.bind(this);
        }

        changeDOM(){
            //e.target.value = 'InnerHTML Value changed for '
            this.setState(prevState => {return {clicked: !prevState.clicked}})
        }

        render(){
            const { input } = this.props;
            const { clicked } = this.state;
            const DEFAULT_TEXT = 'Hello..... This is Test Component..... Input ->' + input;
            const CLICKED_TEXT = 'This is clicked';

            return (
                <div id = "testDiv" onClick={ this.changeDOM }>
                    { !clicked ? DEFAULT_TEXT : CLICKED_TEXT}
                </div>
            )
        }        
}

export default TestComponent;