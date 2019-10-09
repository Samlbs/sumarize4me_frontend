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
    axios.get("https://api.github.com/users/samlbs")
    .then((response) => {
      // handle success
      const uploadFiles = response.data.summaries;
      this.setState({uploadFiles});
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
    var interval = setInterval(this.getAllFiles, 5000);
    if (this.state.status === 'Complete') {
      clearInterval(interval);
      axios.get("https://api.github.com/users/samlbs")
      .then((response) => {
        // handle success
        console.log(response);
        const uploadFiles = response.summaries;
        this.setState({uploadFiles});
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    }
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
