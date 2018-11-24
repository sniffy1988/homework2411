import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./screens/LoginPage";
import RegisterPage from "./screens/RegisterPage";

class App extends Component {
  render() {
    return (
      <div className='ui container'>
        <Switch>
          <Route path='/' exact component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
