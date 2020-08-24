import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom';
import {
    Button,
    RadioButton,
    TextInput,
    Loading,
    FormGroup,
    RadioButtonGroup
} from 'carbon-components-react';
import './scss/login-form.scss'
import { loginByCred, loginByToken } from '../services/api.services';
export class LoginForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            spinner: false,
            submitting: false,
            showType: "credentials",
            cluster_url: "https://api.amocpdev.os.fyre.ibm.com:6443",
            username: "kubeadmin",
            password: "sLhMi-UuL3P-QUdy7-mipBg",
            token: "umtIY8j5JxR4epPhdgQYLjgghmZRIq6NtgyjQoXx69g"
        };
        this.form = React.createRef();
        this.submitForm = this.submitForm.bind(this);
        this.changeType = this.changeType.bind(this);

        this.usernameInput = null;
        this.setUsernameInputRef = element => {
            this.usernameInput = element;
        };
        this.passwordInput = null;
        this.setPasswordInputRef = element => {
            this.passwordInput = element;
        };
        this.cluster_url = React.createRef();
        this.username = React.createRef();
        this.password = React.createRef();
        this.token = React.createRef();

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
        this.setState({
            spinner: true
        })
        let formData = {}
        if (this.state.showType === 'credentials') {
            formData = {
                cluster_url: this.cluster_url.current.value,
                username: this.username.current.value,
                password: this.password.current.value
            }
            loginByCred(formData).then((res) => {
                this.props.history.push("/buildimage");
            }).catch((e) => {
                this.setState({
                    spinner: false
                })
                console.log(e)
            });
        } else if (this.state.showType === 'token') {
            formData = {
                cluster_url: this.cluster_url.current.value,
                token: this.token.current.value
            }
            loginByToken(formData).then((res) => {
                this.props.history.push("/buildimage");
            }).catch((e) => {
                this.setState({
                    spinner: false
                })
                console.log(e)
            });
        }
    }
    render() {
        const {
            submitting,
            showType,
            cluster_url,
            username,
            password,
            token
        } = this.state;
        return (
            <div className={`login-form`}>
                <form
                    name="loginForm"
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
                                ref={this.cluster_url}
                                defaultValue={cluster_url}
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
                                        ref={this.username}
                                        defaultValue={username}
                                    />
                                    <TextInput.PasswordInput
                                        id={`password`}
                                        name={`password`}
                                        labelText={'Password'}
                                        disabled={submitting}
                                        ref={this.password}
                                        defaultValue={password}
                                    />
                                </>
                            }
                            {showType === 'token' &&
                                <TextInput.PasswordInput
                                    id={`token`}
                                    name={`token`}
                                    labelText={'Token'}
                                    disabled={submitting}
                                    ref={this.token}
                                    defaultValue={token}
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

export default withRouter(LoginForm)
