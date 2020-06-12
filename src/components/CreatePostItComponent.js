import React, { Component } from 'react';
import axios from 'axios';


var appjs = require('../../backend/routes/api');

export default class CreatePostIt extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    var userid = appjs
    // var username=appjs

    this.state = {
      owner: '',
      description: '',
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value
    })
  }

  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onChangeMail(e) {
    this.setState({
      mail: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      firstname: this.state.firstname
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      firstname: '',
      lastname: '',
      password: '',
      mail: ''
    })
  }

}