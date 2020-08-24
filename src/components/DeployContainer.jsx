import React, { PureComponent } from 'react';
import { Column, Row } from 'carbon-components-react';
import './scss/login-container.scss'
import { DeployForm } from './DeployForm';

class DeployContainer extends PureComponent {
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
                                        <h2 className="left-title">Deploying an application on OpenShift</h2>
                                        <p>
                                            For more information refer - <a rel="noopener noreferrer" target="_blank" href="https://docs.openshift.com/container-platform/4.5/applications/application_life_cycle_management/creating-applications-using-cli.html">OpenShift - Create Application using CLI</a>
                                        </p>
                                        <p>Explore Code Patterns - <a rel="noopener noreferrer" target="_blank" href="https://developer.ibm.com/technologies/containers/patterns/deploy-to-openshift-4-redhat-universal-base-image/">Deploy to OpenShift 4</a></p>
                                        <p>
                                            Explore Code Patterns - <a rel="noopener noreferrer" target="_blank" href="https://developer.ibm.com/tutorials/deploy-python-app-to-openshift-cluster-source-to-image/">Deploy Python App to OpenShift</a>
                                        </p>
                                    </div>
                                </Column>
                                <Column className={`form-area`}>
                                    <DeployForm />
                                </Column>
                            </Row>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default DeployContainer;