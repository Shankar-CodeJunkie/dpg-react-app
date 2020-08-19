import React, { PureComponent } from 'react';
import {Column, Row} from 'carbon-components-react';
import PushImageForm from './PushImageForm';
import './scss/login-container.scss'

class PushImageContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {
        return (
            <div className={`outer`}>
                <div className={`middle`}>
                    <div className={`inner`}>
                        <div className={`login-container`}>
                            <Row>
                                <Column className={`form-area`}>
                                    <PushImageForm />
                                </Column>
                            </Row>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default PushImageContainer;