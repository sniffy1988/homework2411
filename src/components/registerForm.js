import React, { Component } from "react";

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
    console.log(this.state);
  };

  render() {
    const { email, password, password2 } = this.state;
    return (
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
      </div>
    );
  }
}

export default RegisterForm;
