import React, { PureComponent } from 'react';
import { Column, Row } from 'carbon-components-react';
import LoginForm from './LoginForm';
import './scss/login-container.scss'

class LoginContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {
        const { step } = this.state;
        return (
            <div className={`outer`}>
                <div className={`middle`}>
                    <div className={`login-inner`}>
                        <div className={`login-container`}>
                            <Row>
                                <Column className={`form-area`}>
                                    <LoginForm
                                        currentStep={step}
                                    />
                                </Column>
                            </Row>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default LoginContainer;