import React from 'react';

import './style.css';

export default function UploadForm(props) {

  return (
    <form onSubmit={props.getFormData} encType="multipart/formdata">
        <input type="text" name="title" placeholder="Nome do arquivo" className="inputTitle"/><br></br>
        <input type="file" name="file" className="inputFile"/>
        <select name="language" className="selectLanguage">
          <option name="en-US">en-US</option>
          <option name="es-US">es-US</option>
          <option name="en-AU">en-AU</option>
          <option name="fr-CA">fr-CA</option>
          <option name="en-GB">en-GB</option>
          <option name="de-DE">de-DE</option>
          <option name="pt-BR">pt-BR</option>
          <option name="fr-FR">fr-FR</option>
          <option name="it-ITS">it-ITS</option>
          <option name="ko-KR">ko-KR</option>
          <option name="es-ES">es-ES</option>
          <option name="en-IN">en-IN</option>
          <option name="hi-IN">hi-IN</option>
          <option name="ar-SA">ar-SA</option>
          <option name="ru-RU">ru-RU</option>
          <option name="zh-CN">zh-CN</option>
        </select><br></br>
        <input type="submit" className="buttonSubmit"/>
      </form>
  );
}
