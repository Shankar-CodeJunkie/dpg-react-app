import React, { PureComponent } from 'react';
import { Column, Row } from 'carbon-components-react';
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
                    <div className={`pushimage-inner`}>
                        <div className={`pushimage-container`}>
                            <Row>
                                <Column>
                                    <div className="info-block">
                                        <h2 className="left-title">OpenShift Container Registry (OCR)</h2>
                                        <p>
                                            OpenShift Container Platform provides an integrated container registry called OpenShift Container Registry (OCR) that adds the ability to automatically provision new image repositories on demand. This provides users with a built-in location for their application builds to push the resulting images.
                                        </p>
                                    </div>
                                </Column>
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