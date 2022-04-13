import React, { useState } from 'react';
import './App.css';
import './editor.css';
import Previewer from './Previewer';

function App() {
  const [text, setText] = useState('');

  return (
    <div className='App'>
      <h1>Markdown Previewer</h1>
      <div className='editor-container'>
        <nav className='editor-nav'>Editor</nav>
        <textarea
          name=''
          id='editor'
          cols='30'
          rows='10'
          onChange={(e) => setText(e.target.value)}
          placeholder='Write something here...'
        ></textarea>
      </div>
      <Previewer text={text} />
    </div>
  );
}

export default App;
