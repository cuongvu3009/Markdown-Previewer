import React from 'react';
import './previewer.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Previewer = ({ text }) => {
  return (
    <div className='previewer-container'>
      <nav className='editor-nav'>Previewer</nav>
      <div id='preview'>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Previewer;
