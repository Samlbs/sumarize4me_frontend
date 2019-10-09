import React, {Component} from 'react';
import UploadForm from './components/UploadForm/UploadForm';
import FileList from './components/FileList/FileList';
import axios from 'axios';

class App extends Component {

  getFormData = (e) => {
    e.preventDefault();
    const selectedFile = document.getElementById('file').files[0];
    const title = e.target.elements.title.value;

    axios.post('/posts', {
      title: title,
      file: selectedFile
    })
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <UploadForm getFormData={this.getFormData}></UploadForm>
        <FileList></FileList>
      </div>
    );
  }
}

export default App;
