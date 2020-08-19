import React, { PureComponent } from 'react';
import { Column, Row } from 'carbon-components-react';
import LoginForm from './LoginForm';
import './scss/login-container.scss'

class LoginContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            step: 1
        }
    }
    render() {
        const { step } = this.state;
        return (
            <div className={`outer`}>
                <div className={`middle`}>
                    <div className={`inner`}>
                        <div className={`login-container`}>
                            <Row>
                                <Column className={`form-area`}>
                                    <LoginForm
                                        currentStep={step}
                                    />
                                    {/* <S2IForm
                                        currentStep={step}
                                    /> */}
                                    {/* <PushImageForm /> */}
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