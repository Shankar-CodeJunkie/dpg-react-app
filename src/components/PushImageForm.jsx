import React, { PureComponent } from 'react'
import {
    Button,
    TextInput,
    Loading,
    FormGroup
} from 'carbon-components-react';
import './scss/login-form.scss'

// import Cookies from 'universal-cookie';

export class PushImageForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            spinner: false,
            submitting: false
        };
        this.form = React.createRef();
        this.submitForm = this.submitForm.bind(this);
    }
    componentDidMount() {
        // this.preFillData();
        // this.focusOnInput();
    }
    formAction() {

    }
    submitForm(event) {


    }
    render() {
        const {
            submitting
        } = this.state;
        return (
            <div className={`login-form`}>
                <form
                    name="loginForm"
                    // ref={this.loginForm}
                    method="POST"
                    className={`ibm-row-form`}
                    onSubmit={($event) => { return this.submitForm($event) }}
                    action={this.formAction()}
                    ref={f => (this.form = f)}
                >
                    <div className={`fields-container`}>
                        <div className={`heading-container`}>
                            <h1 className="form-heading ibm-h2">Push image to OCP Registry</h1>
                        </div>
                        <FormGroup legendText="">
                            <TextInput
                                id={`project_name`}
                                name={`project_name`}
                                type={`text`}
                                labelText={'Project Name'}
                                disabled={submitting}
                            />
                        </FormGroup>
                        <Button type="submit" className="some-class" >
                            Push
                        </Button>
                    </div>
                </form>
                {
                    this.state.spinner &&
                    <Loading
                        description='Loading...'
                        small={false}
                        withOverlay={true}
                    />
                }
            </div >
        )
    }
}

export default PushImageForm
