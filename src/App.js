import React, {Component} from 'react';
import UploadForm from './components/UploadForm/UploadForm';
import FileList from './components/FileList/FileList';
import axios from 'axios';
import "./style.css"
import logo from "./images/Sunmarize-Branco.png";

class App extends Component {

  getFormData = (e) => {
    e.preventDefault();
    const selectedFile = document.getElementById('file').files[0];
    const title = e.target.elements.title.value;
    const language = e.target.elements.language.value;
    console.log(language);

    axios.post("", {
      title: title,
      language: language,
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
      <div className="container">
        <div className="col-center-1">
			    <div className="contentTop">
				    <div className="logo">
              <img src={logo} alt="Logo do sunmarize for me "/>
				    </div>
				    <div className="previewTitle">
              <hr></hr>
              <h4>O que podemos traduzir para você hoje?</h4>	
              <h4>Apenas nos diga o arquivo</h4>	
				    </div>
            <div className="formUpload">
              <UploadForm getFormData={this.getFormData}></UploadForm>
            </div> 
          </div>          
        </div>
        <div className="col-center-2 bgwhite">
          <div className="contentTable">
            <FileList></FileList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
