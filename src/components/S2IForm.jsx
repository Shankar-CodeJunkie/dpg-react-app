import React, { PureComponent } from 'react'
import {
    Button,
    RadioButton,
    TextInput,
    Loading,
    FormGroup,
    RadioButtonGroup,
    Select,
    SelectItem,
} from 'carbon-components-react';
import './scss/login-form.scss'

// import Cookies from 'universal-cookie';

export class S2IForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            spinner: false,
            submitting: false,
            showType: "git_repo"
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
                            <h1 className="form-heading ibm-h2">Source to Image</h1>
                        </div>
                        <FormGroup legendText="Input Source">
                            <RadioButtonGroup
                                name="input_source"
                                defaultSelected="git_repo"
                                legend="Group Legend"
                                onChange={this.changeType}>
                                <RadioButton
                                    id="git_repo"
                                    name="input_source"
                                    labelText="Git Repository"
                                    value="git_repo" />
                                <RadioButton
                                    id="workspace"
                                    name="input_source"
                                    labelText="Workspace Directory"
                                    value="workspace" />
                            </RadioButtonGroup>
                        </FormGroup>
                        <FormGroup legendText="">
                            {showType === 'git_repo' &&
                                <TextInput
                                    id={`git_repo_url`}
                                    name={`git_repo_url`}
                                    type={`text`}
                                    labelText={'Git Repository URL'}
                                    disabled={submitting}
                                />
                            }
                            {showType === 'workspace' &&
                                <TextInput
                                    id={`workspace_dir`}
                                    name={`workspace_dir`}
                                    type={`text`}
                                    labelText={'Workspace Directory'}
                                    disabled={submitting}
                                />
                            }
                            <Select className="select-field"
                                labelText="Builder Image"
                                id="builder_image"
                                defaultValue="">
                                <SelectItem
                                    disabled
                                    hidden
                                    value=""
                                    text="Choose an option"
                                />
                                <SelectItem value="java" text="Java" />
                                <SelectItem value="nodejs" text="NodeJS" />

                            </Select>

                            <TextInput
                                id={`name`}
                                name={`name`}
                                type={`text`}
                                labelText={'Name'}
                                disabled={submitting}
                            />
                        </FormGroup>
                        <Button type="submit" className="some-class" >
                            Build Image
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

export default S2IForm
