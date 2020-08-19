import React, { PureComponent } from 'react';
import {Column, Row} from 'carbon-components-react';
import S2IForm from './S2IForm';
import './scss/login-container.scss'

class S2IContainer extends PureComponent {
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
                                    <S2IForm />
                                </Column>
                            </Row>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default S2IContainer;