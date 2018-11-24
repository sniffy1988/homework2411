import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import registerAction from "../store/actions/registerAction";
import { getIsLoading, getErrorMessage } from "../store/selectors";
class RegisterForm extends Component {
  state = {
    email: "",
    password: "",
    password2: ""
  };

  onChangeHandler = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  };

  onClickHandler = () => {
    this.props.registerAction(this.state);
  };

  render() {
    const { email, password, password2 } = this.state;
    const { isLoading, errorMessage } = this.props;

    return isLoading ? (
      <div className='ui segment'>
        <div className='ui active inverted dimmer'>
          <div className='ui text loader'>Loading</div>
        </div>
        <p />
      </div>
    ) : (
      <div className='ui form'>
        <div className='field'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            value={email}
            onChange={this.onChangeHandler}
            name='email'
          />
        </div>
        <div className='field'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            value={password}
            name='password'
            onChange={this.onChangeHandler}
          />
        </div>
        <div className='field'>
          <label htmlFor='password2'>Repeat Password</label>
          <input
            type='password'
            value={password2}
            name='password2'
            onChange={this.onChangeHandler}
          />
        </div>
        <div className='field'>
          <button className='ui button' onClick={this.onClickHandler}>
            Register
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
  dispatch => bindActionCreators({ registerAction }, dispatch)
)(RegisterForm);
