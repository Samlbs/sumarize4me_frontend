import React from 'react';

import './style.css';

export default function UploadForm(props) {
  const languages = ["en-US", "es-US",  "en-AU",  "fr-CA",  "en-GB",  "de-DE",  "pt-BR",  "fr-FR",  
              "it-IT",  "ko-KR",  "es-ES",  "en-IN",  "hi-IN",  "ar-SA",  "ru-RU",  "zh-CN"]
  
  return (
    <form onSubmit={props.getFormData}>
        <input type="text" name="title"/>
        <input type="file" name="file" id="file"/>
        <input type="combobox"/>
        <input type="submit"/>
    </form>
  );
}
