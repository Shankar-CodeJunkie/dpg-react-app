import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom';
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
import { buildImageByWorkspace, buildImageByGit } from '../services/api.services';

// import Cookies from 'universal-cookie';

export class S2IForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            spinner: false,
            submitting: false,
            showType: "git_repo",
            git_repo: "https://github.com/mondalabhishek/express-hello-world",
            builder_image: "nodejs",
            workspace_dir: "",
            name: "dpg-node-hello",
        };
        this.form = React.createRef();
        this.submitForm = this.submitForm.bind(this);
        this.changeType = this.changeType.bind(this);
        this.git_repo = React.createRef();
        this.workspace_dir = React.createRef();
        this.builder_image = React.createRef();
        this.name = React.createRef();

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
        if (this.state.showType === 'git_repo') {
            formData = {
                sourceLocation: this.git_repo.current.value,
                language: this.builder_image.current.value,
                imageName: this.name.current.value
            }
            buildImageByGit(formData).then((res) => {
                this.props.history.push("/pushimage");
            }).catch((e) => {
                this.setState({
                    spinner: false
                })
                console.log(e)
            });
        } else if (this.state.showType === 'workspace') {
            formData = {
                cluster_url: this.cluster_url.current.value,
                token: this.token.current.value
            }
            buildImageByWorkspace(formData).then((res) => {
                this.props.history.push("/pushimage");
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
            git_repo,
            workspace_dir,
            name
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
                                    ref={this.git_repo}
                                    defaultValue={git_repo}
                                />
                            }
                            {showType === 'workspace' &&
                                <TextInput
                                    id={`workspace_dir`}
                                    name={`workspace_dir`}
                                    type={`text`}
                                    labelText={'Workspace Directory'}
                                    disabled={submitting}
                                    ref={this.workspace_dir}
                                    defaultValue={workspace_dir}
                                />
                            }
                            <Select className="select-field"
                                labelText="Builder Image"
                                id="builder_image"
                                name="builder_image"
                                defaultValue="nodejs"
                                ref={this.builder_image}
                                >
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
                                ref={this.name}
                                defaultValue={name}
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

export default withRouter(S2IForm)
