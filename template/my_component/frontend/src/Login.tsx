import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import "./style.css"

interface State {
  submit: boolean
  email: string
  password: string
}

/**
 * This is a React-based component template. The `render()` function is called
 * automatically when your component should be re-rendered.
 */
class Login extends StreamlitComponentBase<State> {
  constructor(props:any) {
    super(props);
    this.state = { submit: false, email:"" , password:""}
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }
  

  public render = (): ReactNode => {
    // Arguments that are passed to the plugin in Python are accessible
    // via `this.props.args`. Here, we access the "name" arg.
    const name = this.props.args["name"]

    return (
      <span className="d-flex flex-column border justify-content-center align-items-center">
        Hello, {name}! &nbsp;
        <span className="d-flex justify-content-between pb-3">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={this.onChangeEmail}/>
        </span>
        <span className="d-flex justify-content-between pb-3">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={this.onChangePassword}/>
        </span>
        <button className="btn btn-primary w-25" onClick={this.onSubmit}>Log In</button>
      </span>
    )
  }

  private onChangeEmail = (e:any): void => {
    const value = e.target.value;
    this.setState(
      prevState => ({email: value}),
    () => Streamlit.setComponentValue({email: this.state.email,password: this.state.password, submit: false}))
  }

  private onChangePassword = (e:any): void => {
    const value = e.target.value;
    this.setState(
      prevState => ({password: value}),
    () => Streamlit.setComponentValue({email: this.state.email,password: this.state.password, submit: false}))
  }

  private onSubmit = (): void => {
    this.setState(
      prevState => ({submit: true}),
    () => Streamlit.setComponentValue({submit: this.state.submit,email: this.state.email,password: this.state.password}))
  }
}

// "withStreamlitConnection" is a wrapper function. It bootstraps the
// connection between your component and the Streamlit app, and handles
// passing arguments from Python -> Component.
//
// You don't need to edit withStreamlitConnection (but you're welcome to!).
export default withStreamlitConnection(Login)
