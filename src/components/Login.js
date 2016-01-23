require('./landing.scss');

import React from 'react';
import View from './View';
import Input from './Input';
import Button from './Button';

class Landing extends React.Component {

  constructor(...args){
    super(...args);

    this.state = {
      email: '',
      password: ''
    }
  }

  emailChange = (value) => {
    this.setState({
      email: value
    });
  };

  passWordChange = (value) => {
    this.setState({
      password: value
    });
  };

  login = () => {
    if (this.props.onLogin) {
      this.props.onLogin(this.state);
    }
  };

  render() {
    return (
      <View className="application-landing">
        <div className="login-wrapper layout-column  layout-center">
          <div className="icon-header icon-round">
            <i className="ion-social-facebook"></i>
          </div>
          <Input type="email" onChange={this.emailChange} label="email"></Input>
          <Input type="password" onChange={this.passWordChange} label="password"></Input>

          <Button className="flex-80" onClick={this.login} label="Kirjaudu"></Button>
        </div>
      </View>
    );
  }
}

export default Landing;
