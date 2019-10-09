import React from 'react';

import './style.css';

export default function UploadForm(props) {
  return (
    <form onSubmit={props.getFormData}>
        <input type="text" name="title"/>
        <input type="text" name="language"/>
        <input type="file" name="file" id="file"/>
        <input type="submit"/>
    </form>
  );
}
