import React, { PureComponent } from 'react';
import { Column, Row } from 'carbon-components-react';
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
                    <div className={`s2i-inner`}>
                        <div className={`s2i-container`}>
                            <Row>
                                <Column>
                                    <div className="info-block">
                                        <h2 className="left-title">Source-To-Image (S2I)</h2>
                                        <p>
                                            Source-to-Image (S2I) is a toolkit and workflow for building reproducible container images from source code. S2I produces ready-to-run images by injecting source code into a container image and letting the container prepare that source code for execution.
                                        </p>
                                        <p>
                                            For more information on S2I refer - <a rel="noopener noreferrer" target="_blank" href="https://github.com/openshift/source-to-image">https://github.com/openshift/source-to-image</a>
                                        </p>
                                        <p>Try out IBM Open Labs for Hands-on experience - <a rel="noopener noreferrer" target="_blank" href="https://developer.ibm.com/openlabs/openshift">IBM Open Labs for Openshift</a></p>
                                        <p>
                                            Explore Code patterns on S2I - <a rel="noopener noreferrer" target="_blank" href="https://developer.ibm.com/patterns/app-modernization-s2i-openshift/">https://developer.ibm.com/patterns/app-modernization-s2i-openshift</a>
                                        </p>
                                        <p>Sample PHP S2I Openshift - <a rel="noopener noreferrer" target="_blank" href="https://developer.ibm.com/patterns/app-modernization-php-s2i-openshift/">https://developer.ibm.com/patterns/app-modernization-php-s2i-openshift/</a>
                                        </p>
                                        <p>Source-to-image Video - <a rel="noopener noreferrer" target="_blank" href="https://developer.ibm.com/videos/source-to-image-s2i-openshift/">https://developer.ibm.com/videos/source-to-image-s2i-openshift/</a>
                                        </p>
                                    </div>
                                </Column>
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