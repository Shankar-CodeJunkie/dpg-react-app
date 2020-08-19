import React, { PureComponent } from 'react'
import {
    Button,
    RadioButton,
    TextInput,
    Loading,
    FormGroup,
    RadioButtonGroup
} from 'carbon-components-react';
import './scss/login-form.scss'

// import Cookies from 'universal-cookie';

export class LoginForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            spinner: false,
            submitting: false,
            showType: "credentials"
        };
        this.form = React.createRef();
        this.submitForm = this.submitForm.bind(this);
        this.changeType = this.changeType.bind(this);
    }
    componentDidMount() {

    }
    changeType(selectedValue) {
        this.setState({
            showType: selectedValue
        })
    }
    formAction() {

    }
    submitForm(event) {
        event.preventDefault();

        // this.props.history.push("/buildimage");

    }
    render() {
        const {
            submitting,
            showType
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
                            <h1 className="form-heading ibm-h2">Login to OCP Cluster</h1>
                        </div>
                        <FormGroup legendText="">
                            <TextInput
                                id={`cluster_url`}
                                name={`cluster_url`}
                                type={`text`}
                                labelText={'Cluster URL'}
                                disabled={submitting}
                            />
                            <RadioButtonGroup
                                name="cred_token"
                                defaultSelected="credentials"
                                legend="Group Legend"
                                onChange={this.changeType}>
                                <RadioButton
                                    id="credentials"
                                    name="cred_token"
                                    labelText="Credentials"
                                    value="credentials" />
                                <RadioButton
                                    id="token"
                                    name="cred_token"
                                    labelText="Token"
                                    value="token" />
                            </RadioButtonGroup>
                        </FormGroup>
                        <FormGroup legendText="">
                            {showType === 'credentials' &&
                                <>
                                    <TextInput
                                        id={`username`}
                                        name={`username`}
                                        type={`text`}
                                        labelText={'Username'}
                                        disabled={submitting}
                                    />
                                    <TextInput.PasswordInput
                                        id={`password`}
                                        name={`password`}
                                        labelText={'Password'}
                                        disabled={submitting}
                                    />
                                </>
                            }
                            {showType === 'token' &&
                                <TextInput
                                    id={`token`}
                                    name={`token`}
                                    type={`text`}
                                    labelText={'Token'}
                                    disabled={submitting}
                                />
                            }
                        </FormGroup>
                        <Button type="submit" className="some-class" >
                            Login
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

export default LoginForm
