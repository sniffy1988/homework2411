import React, { Component } from "react";
import { Link } from "react-router-dom";

import RegisterForm from "../components/registerForm";

export default class RegisterPage extends Component {
  render() {
    return (
      <div>
        <div>
          <RegisterForm />
        </div>
        <Link to='/'>Login</Link>
      </div>
    );
  }
}
