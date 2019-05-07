import React, { Component } from 'react';
import axios from 'axios';
import './LoginForm.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class LoginForm extends Component {
  state = {
    loginSucced: false,
    userId: 0,
    loginValue: '',
    passValue: ''
  }
  
  render() {
    return (
      <div className='loginForm'>
        <TextField 
          className='loginInput'
          id="loginField"
          value={this.state.loginValue}
          onChange={(evt) => this.updateLoginValue(evt)}
          label="Login"
        />
        <TextField
          className='loginInput'
          id="standard-password-input"
          label="Password"
          type="password"
          value={this.state.passValue}
          onChange={(evt) => this.updatePassValue(evt)}
          autoComplete="current-password"
        />
        <Button className='loginInputApply' variant="contained" color="primary" onClick={() => this.checkPassword(this.state.loginValue,this.state.passValue)}>
          Login
        </Button>
      </div>
    );
  }
  checkPassword(login, pass) {
    const url = '/api/checkPassword.php'
    var params = {
      'login': login,
      'pass': pass}
    axios.post(url, params).then(response => response.data)
    .then((data) => {
      console.log(login);
      console.log(pass);
      console.log(typeof(data));
      console.log(data);
      if(typeof(data[0].user_id) !== undefined){
        this.setState({userId: data[0].user_id, loginSucced: true});
      } else {
        this.setState({userId: 0});
      }
      console.log(this.state.loginSucced);
    })
    /*axios({
      method: 'post',
      url,
      data: {
          params
      }
      }).then((data) => {
        console.log(login);
        console.log(pass);
        console.log(typeof(data.data));
        console.log(data);
        if(typeof(data.data[0].user_id) !== undefined){
          this.setState({userId: data[0].user_id, loginSucced: true});
        } else {
          this.setState({userId: 0});
        }
        console.log(this.state.loginSucced);
      })
    */
  }
  updateLoginValue(evt) {
    this.setState({
      loginValue: evt.target.value
    });
  }
  updatePassValue(evt) {
    this.setState({
      passValue: evt.target.value
    });
  }
}

export default LoginForm;