import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import userAction from "../store/actions/userAction";
import { getIsLoading, getErrorMessage } from "../store/selectors/";

class LoginForm extends Component {
  state = {
    login: "",
    password: ""
  };

  onClickHandler = () => {
    this.props.userAction(this.state);
  };

  onChangeHandler = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { login, password } = this.state;
    const { isLoading, errorMessage } = this.props;
    console.log(errorMessage);

    return isLoading ? (
      <div class='ui segment'>
        <div class='ui active inverted dimmer'>
          <div class='ui text loader'>Loading</div>
        </div>
        <p />
      </div>
    ) : (
      <div className='ui form'>
        <div className='field'>
          <label htmlFor='login'>Login</label>
          <input
            type='text'
            name='login'
            onChange={this.onChangeHandler}
            value={login}
            placeholder='Login'
          />
        </div>
        <div className='field'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            onChange={this.onChangeHandler}
            placeholder='Password'
            value={password}
          />
        </div>
        <div className='field'>
          <button className='ui button' onClick={this.onClickHandler}>
            Login
          </button>
        </div>
        {errorMessage && (
          <div className='ui negative message'>
            <div className='header'>{errorMessage}</div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    isLoading: getIsLoading(state),
    errorMessage: getErrorMessage(state)
  }),
  dispatch => bindActionCreators({ userAction }, dispatch)
)(LoginForm);
