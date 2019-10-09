import React, { Component } from 'react';
import axios from 'axios';

import './style.css';

export default class FileList extends Component {
  state = {
    status: 'testeStatus',
    fileName: 'testeName'
  }

  getFileStatus = () => {
    console.log("testando a setInterval")
    axios.get("https://api.github.com/users/samlbs")
    .then(function (response) {
      // handle success
      console.log(response.data.id);
      this.setState({status: response.data.id})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }

  async componentDidMount() {
    setInterval(() => this.getFileStatus(), 5000);
  }
  
  render() {
    return (
      <table>
      <tr>
        <th>FileName</th>
        <th>Status</th>
      </tr>
      <tr>
        <td>{this.state.fileName}</td>
        <td><button>{this.state.status}</button></td>
      </tr>
    </table>
    );
  }
}
