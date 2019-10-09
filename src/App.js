import React, {Component} from 'react';
import UploadForm from './components/UploadForm/UploadForm';
import FileList from './components/FileList/FileList';
import { uniqueId } from 'lodash';
import api from './service/api';

class App extends Component {
  getFormData = (e) => {
    e.preventDefault();
    const selectedFile = document.getElementById('file').files[0];
    const title = e.target.elements.title.value;
    const language = e.target.elements.language.value;
    const id = uniqueId();

    api.post('/posts', {
      fileId: id,
      title: title,
      language: language,
      file: selectedFile
    })
    .then(function (response) {
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
