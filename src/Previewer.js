import React from 'react';
import './previewer.css';
import ReactMarkdown from 'react-markdown';

const Previewer = ({ text }) => {
  return (
    <div className='previewer-container'>
      <nav className='editor-nav'>Previewer</nav>
      <div id='preview'>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Previewer;
