import React, { Component } from 'react';
import axios from 'axios';
import Resumo from '../Resumo/Resumo';

import './style.css';

const initialState = {
  uploadFiles: []
}

export default class FileList extends Component {
  state = {...initialState};

  getAllFiles = () => {
    axios.get("")
    .then((response) => {
      // handle success
      
      //Descomentar quando a api node estiver pronta
      //const uploadFiles = response.data.summaries;
      //this.setState({uploadFiles});
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
    this.getAllFiles();
  }

  render() {
    return (
      <div>
      <hr></hr>
      <h1>Files Uploaded</h1>
      <div className="content">
        <table>
        {this.state.uploadFiles.map(file => (
          <tr><Resumo uploadFiles={file}></Resumo></tr>
        ))}
        </table>
      </div>
    </div>
    );
  }
}