import React, { Component } from 'react';
import axios from 'axios';

import './style.css';

const initialState = {
  status: 'testeStatus',
  fileName: 'fileNameTeste'
}

export default class FileList extends Component {
  state = {...initialState};

  
  getFileStatus = () => {
    console.log("testando a setInterval")
    axios.get("https://api.github.com/users/samlbs")
    .then((response) => {
      // handle success
      console.log(response.data.name);
      this.setState({status: response.data.name});
      //alterar o status do state, mas tá dando problema
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
    var interval = setInterval(this.getFileStatus, 5000);
    if (this.state.status === 'ok') {
      clearInterval(interval);
      //Quando eu receber ok, eu faço uma requisição para receber o resumo
    }
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
